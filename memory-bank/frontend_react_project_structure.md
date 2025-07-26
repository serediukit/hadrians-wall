# Frontend React Project Structure

## Project Layout

*Planned structure:*
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

*Current structure:*
hadrians-wall-frontend/
├── public/
│   ├── index.html
│   └── assets/ # Static assets
├── src/
│   ├── components/
│   │   ├── common/ # Reusable UI components ✅
│   │   │   ├── Layout/ ✅ # App wrapper with header/footer
│   │   │   │   ├── Layout.tsx
│   │   │   │   ├── Header.tsx ✅
│   │   │   │   └── Footer.tsx ⏳
│   │   │   ├── Button/ ⏳
│   │   │   ├── Modal/ ⏳
│   │   │   └── LoadingSpinner/ ⏳
│   │   ├── auth/ # Authentication components ⏳
│   │   │   ├── LoginForm/ ⏳
│   │   │   └── RegisterForm/ ⏳
│   │   ├── game/ # Game-specific components ⏳
│   │   │   ├── PlayerBoard/
│   │   │   ├── GameCard/
│   │   │   ├── ResourceTracker/
│   │   │   ├── WallBuilder/
│   │   │   └── GameRoom/
│   │   └── lobby/ # Lobby and room management ⏳
│   │       ├── GameLobby/
│   │       ├── RoomList/
│   │       └── CreateRoom/
│   ├── hooks/ # Custom React hooks ⏳
│   │   ├── useWebSocket.ts
│   │   ├── useAuth.ts
│   │   └── useGameState.ts
│   ├── store/ # Redux store configuration ✅
│   │   ├── index.ts ✅ # Store setup with RootState export
│   │   ├── slices/ # Redux slices
│   │   │   ├── authSlice.ts ⏳ # PRIORITY - needed for auth forms
│   │   │   ├── gameSlice.ts ⏳
│   │   │   └── roomSlice.ts ⏳
│   │   └── middleware/ # Custom middleware ⏳
│   ├── services/ # API and WebSocket services ⏳
│   │   ├── api.ts # HTTP API client
│   │   ├── websocket.ts # WebSocket client
│   │   └── auth.ts # Authentication service
│   ├── types/ # TypeScript type definitions ⏳
│   │   ├── user.ts
│   │   ├── game.ts
│   │   └── api.ts
│   ├── utils/ # Utility functions ⏳
│   │   ├── gameLogic.ts
│   │   └── validation.ts
│   ├── pages/ # Page components
│   │   ├── HomePage/ ✅ # Complete with auth forms
│   │   │   ├── HomePage.tsx ✅
│   │   │   └── components/ ✅
│   │   │       ├── GameIntro.tsx ✅
│   │   │       ├── LoginForm.tsx ✅
│   │   │       └── RegisterForm.tsx ✅
│   │   ├── GamePage/ ⏳ # Placeholder component
│   │   ├── LobbyPage/ ⏳ # Next priority component
│   │   └── ProfilePage/ ⏳ # User profile management
│   ├── styles/ # Global styles and themes ✅
│   │   ├── globals.css
│   │   └── theme.ts
│   ├── App.tsx ✅ # Main application with routing and auth guards
│   └── index.tsx ✅ # Application entry point
├── package.json ✅ # Dependencies configured
├── tsconfig.json ✅ # TypeScript strict mode
├── tailwind.config.js ✅ # Tailwind CSS configuration
└── README.md # Project documentation

## Key Dependencies ✅
- `react` & `react-dom` - Core React library (v18.3.1)
- `@reduxjs/toolkit` - State management (v2.2.7)
- `react-redux` - React-Redux bindings (v9.1.2)
- `react-router-dom` - Client-side routing (v6.24.1)
- `@types/react` - TypeScript definitions (v18.3.3)
- `tailwindcss` - Utility-first CSS framework (v3.4.4)
- `axios` - HTTP client for API calls (v1.7.2)
- `socket.io-client` - WebSocket client (v4.7.5)
- `react-hook-form` - Form handling (v7.52.1)
- `yup` - Schema validation (v1.4.0)

## Currently Implemented Components

### ✅ HomePage System
- **HomePage.tsx**: Landing page with authentication tabs
    - Responsive design with game introduction and auth panel
    - Tab switching between login and register
    - Authentication state management integration
    - Automatic redirect to lobby when authenticated

- **GameIntro.tsx**: Marketing component showcasing game features
    - Feature highlights with icons
    - Game rules overview
    - Attractive gradient design

- **LoginForm.tsx**: User login functionality
    - Email and password validation
    - Remember me checkbox
    - Forgot password placeholder
    - Loading states and error handling
    - Redux integration ready

- **RegisterForm.tsx**: User registration
    - Username, email, password fields
    - Password confirmation and strength validation
    - Terms of service acceptance
    - Comprehensive form validation

### ✅ Layout System
- **Layout.tsx**: Application wrapper
    - Conditional header/footer display
    - Authentication-based rendering
    - Clean background styling

- **Header.tsx**: Navigation for authenticated users
    - Logo and app branding
    - Main navigation links (Lobby, Profile)
    - User menu with logout functionality
    - Active route highlighting

### ⏳ Pending Components (Next Sprint)
- **Footer.tsx**: Simple footer for authenticated users
- **LobbyPage.tsx**: Game room browser and creation interface
- **ProfilePage.tsx**: User profile management
- **GamePage.tsx**: Main game interface (placeholder initially)

## Development Standards ✅
- **TypeScript**: Strict type checking enabled
- **ESLint + Prettier**: Code formatting and linting configured
- **Component Structure**: Functional components with hooks
- **State Management**: Redux Toolkit pattern established
- **Styling**: Tailwind CSS with responsive design
- **Form Handling**: React Hook Form with comprehensive validation
- **Error Handling**: User-friendly error messages and loading states

## Implementation Patterns Established ✅
- **Form Validation**: Comprehensive validation rules with user feedback
- **Loading States**: Spinner animations during async operations
- **Error Handling**: Consistent error message display patterns
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Authentication Guards**: Route protection based on auth state
- **Component Organization**: Feature-based folder structure
- **TypeScript Integration**: Proper type definitions and interfaces

## Next Development Priorities
1. **Auth Redux Slice** - Implement loginUser, registerUser, logoutUser actions
2. **API Service Layer** - Create HTTP client for backend communication
3. **TypeScript Types** - Define User, Game, Room interfaces
4. **LobbyPage Component** - Game room creation and browsing
5. **WebSocket Integration** - Real-time communication setup

## Testing Strategy
- Component testing with React Testing Library (to be implemented)
- Redux store testing for state management
- Form validation testing
- Authentication flow integration testing