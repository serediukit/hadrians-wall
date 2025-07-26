# Makefile
.PHONY: help build run test clean docker-up docker-down docker-build db-init db-migrate dev install

# Default target
help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# Development
dev: ## Start development environment
	@echo "Starting development environment..."
	docker-compose up --build

dev-detached: ## Start development environment in background
	@echo "Starting development environment in background..."
	docker-compose up --build -d

# Build
build: ## Build the Go application
	@echo "Building application..."
	go build -o bin/backend .

run: build ## Run the application locally
	@echo "Running application..."
	./bin/backend

# Testing
test: ## Run tests
	@echo "Running tests..."
	go test -v ./...

test-coverage: ## Run tests with coverage
	@echo "Running tests with coverage..."
	go test -v -coverprofile=coverage.out ./...
	go tool cover -html=coverage.out -o coverage.html

# Docker operations
docker-build: ## Build Docker image
	@echo "Building Docker image..."
	docker-compose build

docker-up: ## Start Docker containers
	@echo "Starting Docker containers..."
	docker-compose up -d

docker-down: ## Stop Docker containers
	@echo "Stopping Docker containers..."
	docker-compose down

docker-logs: ## Show Docker logs
	docker-compose logs -f

docker-clean: ## Clean Docker containers and volumes
	@echo "Cleaning Docker containers and volumes..."
	docker-compose down -v
	docker system prune -f

# Database operations
db-init: ## Initialize database (create database and user)
	@echo "Initializing database..."
	docker-compose exec db psql -U postgres -c "CREATE DATABASE hadrians_wall_db;" || echo "Database already exists"
	docker-compose exec db psql -U postgres -c "CREATE USER hadrianswall WITH PASSWORD 'FnaslWEQ232n2';" || echo "User already exists"
	docker-compose exec db psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE hadrians_wall_db TO hadrianswall;"

db-migrate: ## Run database migrations
	@echo "Running database migrations..."
	docker-compose exec app go run cmd/migrate/main.go

db-reset: ## Reset database (drop and recreate)
	@echo "Resetting database..."
	docker-compose exec db psql -U postgres -c "DROP DATABASE IF EXISTS hadrians_wall_db;"
	docker-compose exec db psql -U postgres -c "CREATE DATABASE hadrians_wall_db;"
	docker-compose exec db psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE hadrians_wall_db TO hadrianswall;"

db-shell: ## Connect to database shell
	docker-compose exec db psql -U hadrianswall -d hadrians_wall_db

# Dependencies
install: ## Install Go dependencies
	@echo "Installing dependencies..."
	go mod download
	go mod tidy

# Clean
clean: ## Clean build artifacts
	@echo "Cleaning..."
	rm -rf bin/
	rm -f coverage.out coverage.html
	go clean

# Hot reload for development (requires air)
install-air: ## Install air for hot reloading
	go install github.com/cosmtrek/air@latest

dev-hot: ## Start development with hot reloading
	air

