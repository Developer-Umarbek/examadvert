create EXTENSION if not EXISTS "uuid-ossp";


create table "advert"(
    "advert_id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    "advert_buy" BIGINT not NULL ,
    "advert_date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "advert_url"  VARCHAR(255) not null,
    "advert_picture" VARCHAR(255) null
);

