export interface GameRoom {
  id: string;
  name: string;
  hostId: string;
  hostUsername: string;
  players: Player[];
  maxPlayers: number;
  status: GameStatus;
  settings: GameSettings;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
}

export interface Player {
  id: string;
  userId: string;
  username: string;
  isHost: boolean;
  isReady: boolean;
  playerBoard?: PlayerBoard;
  score?: number;
  position?: number;
}

export interface GameSettings {
  maxPlayers: number;
  timeLimit?: number;
  privateRoom: boolean;
  password?: string;
}

export enum GameStatus {
  WAITING = 'waiting',
  STARTING = 'starting',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export interface GameState {
  roomId: string;
  currentRound: number;
  currentPhase: GamePhase;
  currentPlayerId?: string;
  timeRemaining?: number;
  gameData: GameData;
}

export enum GamePhase {
  SETUP = 'setup',
  FLIP_CARDS = 'flip_cards',
  CHOOSE_ACTIONS = 'choose_actions',
  RESOLVE_ACTIONS = 'resolve_actions',
  INVASION = 'invasion',
  SCORING = 'scoring',
  END_ROUND = 'end_round',
  GAME_OVER = 'game_over',
}

export interface GameData {
  round: number;
  players: { [playerId: string]: PlayerBoard };
  activeCards: GameCard[];
  invasionDeck: InvasionCard[];
}

export interface PlayerBoard {
  playerId: string;
  resources: Resources;
  workers: Workers;
  wall: WallSection[];
  buildings: Building[];
  cohorts: Cohort[];
  score: ScoreTracker;
}

export interface Resources {
  stone: number;
  wood: number;
  food: number;
  gold: number;
}

export interface Workers {
  soldiers: number;
  builders: number;
  servants: number;
  civilians: number;
}

export interface WallSection {
  id: string;
  type: 'milecastle' | 'tower' | 'gate';
  position: number;
  isBuilt: boolean;
  defenseValue: number;
}

export interface Building {
  id: string;
  type: BuildingType;
  position: { x: number; y: number };
  resources: Resources;
  isActive: boolean;
}

export enum BuildingType {
  QUARRY = 'quarry',
  WORKSHOP = 'workshop',
  GRANARY = 'granary',
  TEMPLE = 'temple',
  BATHHOUSE = 'bathhouse',
  THEATRE = 'theatre',
}

export interface Cohort {
  id: string;
  strength: number;
  position: number;
  isActive: boolean;
}

export interface ScoreTracker {
  wall: number;
  buildings: number;
  cohorts: number;
  resources: number;
  bonus: number;
  total: number;
}

export interface GameCard {
  id: string;
  type: 'player' | 'fate';
  resources: Resources;
  workers: Workers;
  specialAction?: string;
}

export interface InvasionCard {
  id: string;
  strength: number;
  rewards: Resources;
  penalties: Resources;
}
