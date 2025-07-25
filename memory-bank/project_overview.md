# Hadrian's Wall Online - Project Overview

## Project Description
An online multiplayer web application version of the strategic board game "Hadrian's Wall" by Renegade Game Studios. Players take on the role of Roman Generals constructing milecastles and managing resources along Hadrian's Wall.

## Technology Stack
- **Frontend**: React.js with TypeScript
- **Backend**: Go (Golang) 1.24.2
- **Database**: PostgreSQL for game state persistence
- **Real-time Communication**: WebSockets
- **Authentication**: JWT-based authentication
- **Deployment**: Docker containers

## Core Features
1. **Multiplayer Game Rooms**: Create and join game sessions
2. **Real-time Gameplay**: Synchronized game state across all players
3. **Game State Management**: Persistent game saves and resume functionality
4. **User Management**: Registration, login, friend system
5. **Game Mechanics**: Full implementation of Hadrian's Wall rules
6. **Spectator Mode**: Watch ongoing games
7. **Game History**: Review completed games

## Architecture
- **Frontend**: Single Page Application (SPA) with React
- **Backend**: RESTful API with WebSocket support
- **Database**: Relational database for structured game data
- **Cache**: Redis for session management and real-time data