package server

import (
	"fmt"
	"hadrians-wall-game/internal/config"
	"hadrians-wall-game/internal/database"
	"hadrians-wall-game/internal/handlers"

	"github.com/gin-gonic/gin"
)

type Server struct {
	config *config.Config
	router *gin.Engine
	db     *database.DB
}

func New(cfg *config.Config) *Server {
	router := gin.Default()

	// Initialize database
	db, err := database.New(cfg.DatabaseURL)
	if err != nil {
		panic(fmt.Sprintf("Failed to connect to database: %v", err))
	}

	s := &Server{
		config: cfg,
		router: router,
		db:     db,
	}

	s.setupRoutes()
	return s
}

func (s *Server) setupRoutes() {
	api := s.router.Group("/api/v1")

	// Authentication routes
	auth := api.Group("/auth")
	{
		auth.POST("/register", handlers.Register(s.db))
		auth.POST("/login", handlers.Login(s.db))
	}

	// Game routes (protected)
	games := api.Group("/games")
	// games.Use(middleware.Auth(s.config.JWTSecret))
	{
		games.GET("/", handlers.ListGames(s.db))
		games.POST("/", handlers.CreateGame(s.db))
		games.GET("/:id", handlers.GetGame(s.db))
		games.POST("/:id/join", handlers.JoinGame(s.db))
	}

	// WebSocket endpoint for real-time game communication
	s.router.GET("/ws/:gameId", handlers.WebSocketHandler(s.db))
}

func (s *Server) Start() error {
	return s.router.Run(":" + s.config.Port)
}
