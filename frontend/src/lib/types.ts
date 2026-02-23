export interface Oven {
  id: string;
  name: string;
  modelUrl?: string;
}

export interface OvenData {
  id?: number;
  ovenId?: string;
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

export interface ServerMessage {
  type: 'data' | 'status' | 'error';
  payload: OvenData | { connected: boolean; clientCount: number; data?: OvenData } | string;
}

export interface ClientMessage {
  type: 'config' | 'start' | 'stop' | 'toggleDoor' | 'setTarget' | 'reset';
  payload?: Partial<OvenConfig> | { targetTemperature?: number };
}

export interface ServerStatus {
  connected: boolean;
  clientCount: number;
  simulator: boolean;
  config: OvenConfig;
}

export type ViewMode = '3d' | 'stats';

export type OpcTagType = 'temperature' | 'pressure' | 'power' | 'door' | 'humidity' | 'switch' | 'number' | 'string';

export interface OpcUaConfig {
  id: string;
  name: string;
  endpoint: string;
  securityPolicy: 'None' | 'Basic128Rsa15' | 'Basic256' | 'Basic256Sha256';
  authenticationMode: 'Anonymous' | 'Username' | 'Certificate';
  username?: string;
  password?: string;
  certificatePath?: string;
  privateKeyPath?: string;
  pollingInterval: number;
  enabled: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface OpcUaTag {
  id: string;
  configId: string;
  name: string;
  nodeId: string;
  dataType: OpcTagType;
  description?: string;
  unit?: string;
  minValue?: number;
  maxValue?: number;
  visible: boolean;
  color?: string;
}

export interface ConnectionStatus {
  connected: boolean;
  lastSync?: number;
  error?: string;
}

export interface OnboardingData {
  completed: boolean;
  currentStep: number;
  configId?: string;
  selectedTags: string[];
  hasCustomModel: boolean;
}
