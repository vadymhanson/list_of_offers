
CREATE SCHEMA IF NOT EXISTS app;

CREATE TABLE IF NOT EXISTS app.partner (
    id                      INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    public_id               VARCHAR(12) UNIQUE NOT NULL,
    created                 TIMESTAMPTZ,
    updated                 TIMESTAMPTZ,
    company_name            VARCHAR(200),
    contact_name            VARCHAR(200),
    status                  VARCHAR(50),
    email                   VARCHAR(200) UNIQUE NOT NULL,
    phone                   VARCHAR(200) UNIQUE NOT NULL,
    address_street          VARCHAR(200),
    address_city            VARCHAR(200),
    address_postalcode      VARCHAR(50),
    address_country         VARCHAR(2),
    area_code               VARCHAR(50),
    working_schedule        JSONB
);

CREATE TABLE IF NOT EXISTS app.customer (
    id                      INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    public_id               VARCHAR(12) UNIQUE NOT NULL,
    created                 TIMESTAMPTZ,
    updated                 TIMESTAMPTZ,
    name                    VARCHAR(200),
    company_name            VARCHAR(200),
    customer_type           VARCHAR(50),
    email                   VARCHAR(200) UNIQUE NOT NULL,
    phone                   VARCHAR(200) UNIQUE NOT NULL,
    address_street          VARCHAR(200),
    address_city            VARCHAR(200),
    address_postalcode      VARCHAR(50),
    address_country         VARCHAR(2),
    area_code               VARCHAR(50),
    schedule                JSONB,
    served_by               INT REFERENCES app.partner (id)
);

CREATE TABLE IF NOT EXISTS app.contract (
    id                      INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    created                 TIMESTAMPTZ,
    updated                 TIMESTAMPTZ,
    name                    VARCHAR(200) UNIQUE NOT NULL,
    customer                INT UNIQUE NOT NULL REFERENCES app.customer (id),
    served_by               INT NOT NULL REFERENCES app.partner (id),
    area_code               VARCHAR(50),
    schedule                JSONB,
    price                   NUMERIC(16,2),
    start                   DATE
);
