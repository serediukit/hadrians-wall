export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface WebSocketMessage {
  type: string;
  payload: any;
  timestamp: string;
  userId?: string;
  roomId?: string;
}

export enum WebSocketMessageType {
  // Connection events
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  
  // Room events
  JOIN_ROOM = 'join_room',
  LEAVE_ROOM = 'leave_room',
  ROOM_UPDATED = 'room_updated',
  
  // Game events
  GAME_STARTED = 'game_started',
  GAME_STATE_UPDATED = 'game_state_updated',
  PLAYER_ACTION = 'player_action',
  PHASE_CHANGED = 'phase_changed',
  ROUND_ENDED = 'round_ended',
  GAME_ENDED = 'game_ended',
  
  // Chat events
  CHAT_MESSAGE = 'chat_message',
  
  // Error events
  ERROR = 'error',
}

export interface CreateRoomRequest {
  name: string;
  maxPlayers: number;
  privateRoom: boolean;
  password?: string;
}

export interface JoinRoomRequest {
  roomId: string;
  password?: string;
}

export interface PlayerActionRequest {
  roomId: string;
  playerId: string;
  actionType: string;
  actionData: any;
}
