# Frontend React Project Structure

## Project Layout

hadrians-wall-frontend/
├── public/
│ ├── index.html
│ └── assets/ # Static assets
├── src/
│ ├── components/
│ │ ├── common/ # Reusable UI components
│ │ │ ├── Button/
│ │ │ ├── Modal/
│ │ │ └── LoadingSpinner/
│ │ ├── auth/ # Authentication components
│ │ │ ├── LoginForm/
│ │ │ └── RegisterForm/
│ │ ├── game/ # Game-specific components
│ │ │ ├── PlayerBoard/
│ │ │ ├── GameCard/
│ │ │ ├── ResourceTracker/
│ │ │ ├── WallBuilder/
│ │ │ └── GameRoom/
│ │ └── lobby/ # Lobby and room management
│ │ ├── GameLobby/
│ │ ├── RoomList/
│ │ └── CreateRoom/
│ ├── hooks/ # Custom React hooks
│ │ ├── useWebSocket.ts
│ │ ├── useAuth.ts
│ │ └── useGameState.ts
│ ├── store/ # Redux store configuration
│ │ ├── index.ts # Store setup
│ │ ├── slices/ # Redux slices
│ │ │ ├── authSlice.ts
│ │ │ ├── gameSlice.ts
│ │ │ └── roomSlice.ts
│ │ └── middleware/ # Custom middleware
│ ├── services/ # API and WebSocket services
│ │ ├── api.ts # HTTP API client
│ │ ├── websocket.ts # WebSocket client
│ │ └── auth.ts # Authentication service
│ ├── types/ # TypeScript type definitions
│ │ ├── user.ts
│ │ ├── game.ts
│ │ └── api.ts
│ ├── utils/ # Utility functions
│ │ ├── gameLogic.ts
│ │ └── validation.ts
│ ├── pages/ # Page components
│ │ ├── HomePage/
│ │ ├── GamePage/
│ │ ├── LobbyPage/
│ │ └── ProfilePage/
│ ├── styles/ # Global styles and themes
│ │ ├── globals.css
│ │ └── theme.ts
│ ├── App.tsx # Main application component
│ └── index.tsx # Application entry point
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
└── README.md # Project documentation

## Key Dependencies
- `react` & `react-dom` - Core React library
- `@reduxjs/toolkit` - State management
- `react-redux` - React-Redux bindings
- `react-router-dom` - Client-side routing
- `@types/react` - TypeScript definitions
- `tailwindcss` - Utility-first CSS framework
- `axios` - HTTP client for API calls
- `socket.io-client` - WebSocket client
- `react-hook-form` - Form handling
- `yup` - Schema validation

## Development Standards
- **TypeScript**: Strict type checking enabled
- **ESLint + Prettier**: Code formatting and linting
- **Component Structure**: Functional components with hooks
- **State Management**: Redux Toolkit for global state
- **Styling**: Tailwind CSS with custom components