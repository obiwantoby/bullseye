-- init.sql

CREATE TABLE IF NOT EXISTS shooters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS matches (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    match_date DATE,
    description TEXT,
    caliber VARCHAR(50),           -- NEW: caliber for the entire match
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS score_rounds (
    id SERIAL PRIMARY KEY,
    shooter_id INTEGER REFERENCES shooters(id),
    match_id INTEGER REFERENCES matches(id),
    round_type VARCHAR(10) NOT NULL,  -- e.g. "SF", "TF", "RF", "NMC"
    score NUMERIC NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);