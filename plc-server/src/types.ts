export interface OvenData {
  id?: number;
  timestamp: number;
  temperatureInside: number;
  temperatureOutside: number;
  pressure: number;
  power: number;
  humidity: number;
  cycleTime: number;
  doorOpen: boolean;
  heatingOn: boolean;
  targetTemperature: number;
}

export interface OvenConfig {
  targetTemperature: number;
  heatingEnabled: boolean;
  simulationSpeed: number;
}

export interface ClientMessage {
  type: 'config' | 'start' | 'stop' | 'toggleDoor' | 'setTarget' | 'reset';
  payload?: Partial<OvenConfig> | { targetTemperature?: number };
}

export interface ServerMessage {
  type: 'data' | 'status' | 'error';
  payload: OvenData | { connected: boolean; clientCount: number; data?: OvenData } | string;
}

export interface HistoryQuery {
  from?: number;
  to?: number;
  limit?: number;
}
