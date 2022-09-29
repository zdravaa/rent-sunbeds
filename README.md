# RentSunbeds

Used technologies: 
- Node.js
- Docker
- Redis
- MySQL

If you just want to start the application run:

    docker-compose up
It is possible that one of the containers is going to fail so you will need to restart it.
The reason is our Management-Service and Redirection-Service are not waiting for MySQL so they will try to connect before these services are ready.

**ROUTES**:

**Management-Service:**

Create new sunbed - **POST** /sun_beds 

Get list of sunbeds - **GET** /sun_beds

Book a sunbed - **POST** /reservations

Cancel reservation - **DELETE** /reservations/id

Filter reservations by email and date ( not used in frontend ATM ) - **GET** /reservations/email/date


