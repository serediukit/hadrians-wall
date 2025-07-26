# Backend Go Project Structure

## Project Layout

*The plan of project structure is:*
hadrians-wall-backend/
├── cmd/
│ └── server/
│ └── main.go # Application entry point
├── internal/
│ ├── config/
│ │ └── config.go # Configuration management
│ ├── domain/
│ │ ├── user.go # User entity and interfaces
│ │ ├── game.go # Game entity and business logic
│ │ ├── gameroom.go # Game room management
│ │ └── player.go # Player state and actions
│ ├── infrastructure/
│ │ ├── database/
│ │ │ ├── postgres.go # Database connection
│ │ │ └── migrations/ # Database migrations
│ │ ├── websocket/
│ │ │ └── hub.go # WebSocket hub management
│ │ └── auth/
│ │ └── jwt.go # JWT token handling
│ ├── interfaces/
│ │ ├── http/
│ │ │ ├── handlers/ # HTTP request handlers
│ │ │ ├── middleware/ # HTTP middleware
│ │ └── routes.go # Route definitions
│ │ └── websocket/
│ │ └── handlers.go # WebSocket message handlers
│ ├── usecases/
│ │ ├── auth/
│ │ │ └── service.go # Authentication use cases
│ │ ├── game/
│ │ │ └── service.go # Game logic use cases
│ │ └── room/
│ │ └── service.go # Room management use cases
│ └── repositories/
│ ├── user_repository.go # User data access
│ ├── game_repository.go # Game data access
│ └── room_repository.go # Room data access
├── pkg/
│ ├── errors/
│ │ └── errors.go # Custom error types
│ └── utils/
│ └── validator.go # Input validation utilities
├── tests/
│ ├── integration/ # Integration tests
│ └── unit/ # Unit tests
├── docker-compose.yml # Development environment
├── Dockerfile # Container configuration
├── go.mod # Go modules
└── README.md # Project documentation

*Current project structure is:*
backend/
├── cmd/migrate/ # Database migrations
├── internal/
│ ├── config/ # Configuration management
│ ├── database/ # Database operations
│ ├── handlers/ # HTTP handlers
│ ├── server/ # Server setup
│ └── game/ # Game logic
├── migrations/
│ └── init.sql # Database initialization
├── Makefile # Development commands
└── docker-compose.yml # Development environment

## Key Dependencies

- `github.com/gin-gonic/gin` - HTTP web framework
- `github.com/gorilla/websocket` - WebSocket implementation
- `gorm.io/gorm` - ORM for database operations
- `github.com/golang-jwt/jwt/v5` - JWT token handling
- `github.com/go-playground/validator/v10` - Input validation
- `github.com/joho/godotenv` - Environment variable management

## Architecture Patterns

- **Clean Architecture**: Clear separation of concerns
- **Dependency Injection**: Testable and modular code
- **Repository Pattern**: Data access abstraction
- **Use Case Pattern**: Business logic encapsulation