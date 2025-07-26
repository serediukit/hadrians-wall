-- This file will be executed when the PostgreSQL container starts

-- Create the database if it doesn't exist
SELECT 'CREATE DATABASE hadrians_wall_db' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'hadrians_wall_db')\gexec

-- Connect to the database
\c hadrians_wall_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create games table
CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    status VARCHAR(20) DEFAULT 'waiting' CHECK (status IN ('waiting', 'in_progress', 'finished', 'cancelled')),
    max_players INTEGER DEFAULT 4 CHECK (max_players BETWEEN 2 AND 6),
    current_players INTEGER DEFAULT 0,
    game_state JSONB DEFAULT '{}',
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create game_players table
CREATE TABLE IF NOT EXISTS game_players (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    player_position INTEGER CHECK (player_position BETWEEN 1 AND 6),
    player_state JSONB DEFAULT '{}',
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(game_id, user_id),
    UNIQUE(game_id, player_position)
);

-- Create game_moves table for storing game history
CREATE TABLE IF NOT EXISTS game_moves (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    move_type VARCHAR(50) NOT NULL,
    move_data JSONB NOT NULL,
    turn_number INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_games_status ON games(status);
CREATE INDEX IF NOT EXISTS idx_games_created_by ON games(created_by);
CREATE INDEX IF NOT EXISTS idx_game_players_game_id ON game_players(game_id);
CREATE INDEX IF NOT EXISTS idx_game_players_user_id ON game_players(user_id);
CREATE INDEX IF NOT EXISTS idx_game_moves_game_id ON game_moves(game_id);
CREATE INDEX IF NOT EXISTS idx_game_moves_turn ON game_moves(game_id, turn_number);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_games_updated_at BEFORE UPDATE ON games FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data for development
INSERT INTO users (username, email, password_hash) VALUES 
    ('testuser1', 'test1@example.com', '$2a$10$example.hash.here'),
    ('testuser2', 'test2@example.com', '$2a$10$example.hash.here')
ON CONFLICT (username) DO NOTHING;

-- Grant permissions
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO hadrianswall;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO hadrianswall;