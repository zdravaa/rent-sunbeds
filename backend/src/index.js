const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const cors = require('cors');
const {publishToQueue} = require('./services/MQService');
const {body, validationResult} = require("express-validator");
const {createClient} = require("redis");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors()); 

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('Connection esstablished');
});

const client = createClient({
  socket: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST
  }
});
client.on('error', (err) => console.log('Redis Client Error', err));
client.connect().then(() => {
  console.log('connected redis');
});

const APP_URL = process.env.REDIRECTION_APP_URL;
const PORT = process.env.APP_PORT;
const HOST = '0.0.0.0';

const SunBeds = sequelize.define('SunBeds', {
  number: {
    type: DataTypes.INTEGER
  },
  zone: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'sun_beds'
});

const Reservations = sequelize.define('Reservations', {
  sunbed_id: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING
  },
  reservation_date: {
    type: DataTypes.DATE
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'reservations'
});

SunBeds.hasMany(Reservations, {
  foreignKey: 'sunbed_id'
});
Reservations.belongsTo(SunBeds, {
  foreignKey: 'sunbed_id',
});

app.get('/', async function (req, res) {
  return res.json('Hello World!')
});

app.get('/sun_beds', async (req, res) => {
  return res.json(await SunBeds.findAll());
});

app.get('/reservations', async (req, res) => {
  const cachedResult =  await client.get('sunbeds');
  return cachedResult ? res.json(JSON.parse(cachedResult)) : res.json(await SunBeds.findAll());
});

app.get('/reservations/:email/:date', async (req, res) => {
  let response = await Reservations.findAll({
    include: SunBeds,
    where: {
      email: req.params.email,
      reservation_date: req.params.date,
    }
  })

  return res.json(response);
});

app.post('/sun_beds', body('number').notEmpty().isInt(),
  body('zone').notEmpty().isString(),
  body('price').notEmpty().isInt(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    const createdSunBed = await SunBeds.create(req.body)
    return res.json(createdSunBed)
  }
)

app.post('/reservations',
  body('sunbed_id').notEmpty().isInt(),
  body('reservation_date').notEmpty().isDate(),
  body('email').notEmpty().isEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const createdTransaction = await Reservations.create(req.body)
    return res.json(createdTransaction);
  }
)

app.delete('/reservations/:id', async (req, res) => {
  await Reservations.destroy({
    where: {
      id: Number(req.params.id)
    }
  })
  return res.json('Success');
})

async function createUrl(realUrl) {
  const msgQueueUrl = await Url.build({realUrl: realUrl}).save();
  const hash = hashids.encode(msgQueueUrl.id)
  const shortUrl = `${APP_URL}/${hash}`
  msgQueueUrl.setDataValue('shortUrlHash', hash);
  await publishToQueue(msgQueueUrl, 'urls.create');
  msgQueueUrl.setDataValue('shortUrl', shortUrl);
  return msgQueueUrl;
}

app.listen(PORT, HOST);
