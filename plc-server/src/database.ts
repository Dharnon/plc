import * as fs from 'fs';
import * as path from 'path';
import { OvenData } from './types';

const dbPath = path.join(__dirname, '..', 'data', 'metrics.json');

interface StoredMetric {
  id: number;
  timestamp: number;
  temperature_inside: number;
  temperature_outside: number;
  pressure: number;
  power: number;
  humidity: number;
  cycle_time: number;
  door_open: number;
  heating_on: number;
  target_temperature: number;
}

let metrics: StoredMetric[] = [];
let nextId = 1;

function ensureDir(): void {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function loadData(): void {
  ensureDir();
  if (fs.existsSync(dbPath)) {
    try {
      const data = fs.readFileSync(dbPath, 'utf-8');
      const parsed = JSON.parse(data);
      metrics = parsed.metrics || [];
      nextId = parsed.nextId || 1;
    } catch {
      metrics = [];
      nextId = 1;
    }
  }
}

function saveData(): void {
  ensureDir();
  fs.writeFileSync(dbPath, JSON.stringify({ metrics, nextId }, null, 2));
}

export async function initDb(): Promise<void> {
  loadData();
}

export function saveMetric(data: OvenData): void {
  const metric: StoredMetric = {
    id: nextId++,
    timestamp: data.timestamp,
    temperature_inside: data.temperatureInside,
    temperature_outside: data.temperatureOutside,
    pressure: data.pressure,
    power: data.power,
    humidity: data.humidity,
    cycle_time: data.cycleTime,
    door_open: data.doorOpen ? 1 : 0,
    heating_on: data.heatingOn ? 1 : 0,
    target_temperature: data.targetTemperature
  };
  
  metrics.push(metric);
  
  if (metrics.length > 10000) {
    metrics = metrics.slice(-5000);
  }
  
  if (Math.random() < 0.1) {
    saveData();
  }
}

export function getHistory(from?: number, to?: number, limit: number = 100): OvenData[] {
  let filtered = [...metrics];
  
  if (from) {
    filtered = filtered.filter(m => m.timestamp >= from);
  }
  if (to) {
    filtered = filtered.filter(m => m.timestamp <= to);
  }
  
  filtered.sort((a, b) => b.timestamp - a.timestamp);
  
  if (limit) {
    filtered = filtered.slice(0, limit);
  }
  
  return filtered.map(m => ({
    id: m.id,
    timestamp: m.timestamp,
    temperatureInside: m.temperature_inside,
    temperatureOutside: m.temperature_outside,
    pressure: m.pressure,
    power: m.power,
    humidity: m.humidity,
    cycleTime: m.cycle_time,
    doorOpen: m.door_open === 1,
    heatingOn: m.heating_on === 1,
    targetTemperature: m.target_temperature
  }));
}

export function getLatest(limit: number = 30): OvenData[] {
  return getHistory(undefined, undefined, limit).reverse();
}

export function clearHistory(): void {
  metrics = [];
  nextId = 1;
  saveData();
}

export function closeDatabase(): void {
  saveData();
}
