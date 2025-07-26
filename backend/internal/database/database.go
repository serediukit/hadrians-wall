package database

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

type DB struct {
	conn *sql.DB
}

func New(databaseURL string) (*DB, error) {
	conn, err := sql.Open("postgres", databaseURL)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	if err := conn.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	db := &DB{conn: conn}

	return db, nil
}

func (db *DB) Close() error {
	return db.conn.Close()
}

func (db *DB) GetConnection() *sql.DB {
	return db.conn
}

func (db *DB) HealthCheck() error {
	return db.conn.Ping()
}
