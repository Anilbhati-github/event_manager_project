CREATE DATABASE elegance;
CREATE TABLE event (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(100),
place VARCHAR(100),
event_time VARCHAR(40) NOT NULL,
created_at timestamp with time zone NOT NULL DEFAULT current_timestamp,
updated_at timestamp with time zone NOT NULL DEFAULT current_timestamp
);




