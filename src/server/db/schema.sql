-- from root directory -- psql < src/server/db/schema.sql

\c fidgetywidget;
-- DROP TABLE IF EXISTS doctors;
-- DROP TABLE IF EXISTS patients; 

DROP TABLE IF EXISTS users CASCADE;   
DROP TABLE IF EXISTS users_teams;      
DROP TABLE IF EXISTS food; 
DROP TABLE IF EXISTS exercise; 
DROP TABLE IF EXISTS sleep;
DROP TABLE IF EXISTS mem;      
DROP TABLE IF EXISTS challenges;    
DROP TABLE IF EXISTS teams;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  username VARCHAR(50) UNIQUE,
  password VARCHAR(50),
  email VARCHAR(100),
  age INTEGER,
  weight INTEGER,
  height DECIMAL,
  bmi DECIMAL,
  goal VARCHAR(255),
  points INTEGER DEFAULT 0,
  user_icon VARCHAR(255),
  lat DECIMAL,
  lng DECIMAL
);

CREATE TABLE challenges (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(255),
  challenger INTEGER REFERENCES users (id),
  opponent INTEGER REFERENCES users (id),
  winner INTEGER
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(255),
  team_icon VARCHAR(255)
);

CREATE TABLE users_teams (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  team_id INTEGER REFERENCES teams (id)
);

CREATE TABLE food (
  id SERIAL PRIMARY KEY,
  date_performed VARCHAR(50),
  protein DECIMAL,
  fats DECIMAL,
  carbs DECIMAL,
  calories DECIMAL,
  user_id INTEGER REFERENCES users (id)
);

CREATE TABLE exercise (
  id SERIAL PRIMARY KEY,
  date_performed VARCHAR(50),
  type VARCHAR(100),
  duration DECIMAL,
  distance DECIMAL,
  reps INTEGER,
  sets INTEGER,
  user_id INTEGER REFERENCES users (id)
);

CREATE TABLE sleep (
  id SERIAL PRIMARY KEY,
  date_performed VARCHAR(50),
  duration DECIMAL,
  quality DECIMAL,
  user_id INTEGER REFERENCES users (id)
);

CREATE TABLE mem (
  id SERIAL PRIMARY KEY,
  date_performed VARCHAR(50),
  mood DECIMAL,
  energy DECIMAL,
  motivation DECIMAL,
  user_id INTEGER REFERENCES users (id)
);
