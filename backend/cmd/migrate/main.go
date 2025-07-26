// cmd/migrate/main.go
package main

import (
	"fmt"
	"hadrians-wall-game/internal/config"
	"hadrians-wall-game/internal/database"
	"io/ioutil"
	"log"
	"path/filepath"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatal("Failed to load configuration:", err)
	}

	db, err := database.New(cfg.DatabaseURL)
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	defer db.Close()

	migrationFiles, err := filepath.Glob("migrations/*.sql")
	if err != nil {
		log.Fatal("Failed to read migration files:", err)
	}

	for _, file := range migrationFiles {
		fmt.Printf("Executing migration: %s\n", file)

		content, err := ioutil.ReadFile(file)
		if err != nil {
			log.Fatalf("Failed to read migration file %s: %v", file, err)
		}

		if _, err := db.GetConnection().Exec(string(content)); err != nil {
			log.Fatalf("Failed to execute migration %s: %v", file, err)
		}
	}

	fmt.Println("All migrations executed successfully!")
}
