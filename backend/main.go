package main

import (
	"hadrians-wall-game/internal/config"
	"hadrians-wall-game/internal/server"
	"log"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatal("Failed to load configuration:", err)
	}

	srv := server.New(cfg)
	if err := srv.Start(); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
