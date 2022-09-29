CREATE TABLE sun_beds
(
    id         bigint(20) UNSIGNED AUTO_INCREMENT NOT NULL,
    number     INT         NOT NULL,
    zone       VARCHAR(10) NOT NULL,
    price      INT         NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE reservations
(
    id               bigint(20) UNSIGNED AUTO_INCREMENT NOT NULL,
    sunbed_id        bigint(20) UNSIGNED NOT NULL,
    email            VARCHAR(50) NOT NULL,
    reservation_date DATE        NOT NULL,
    created_at       TIMESTAMP NULL,
    updated_at       TIMESTAMP NULL,
    PRIMARY KEY (`id`),
    KEY              `reservations_sunbed_id_foreign` (`sunbed_id`),
    CONSTRAINT `reservations_sunbed_id_foreign` FOREIGN KEY (`sunbed_id`) REFERENCES `sun_beds` (`id`) ON DELETE CASCADE
);
