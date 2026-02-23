import { OvenData, OvenConfig } from './types';

export class OvenSimulator {
  private data: OvenData;
  private config: OvenConfig;
  private isRunning: boolean = true;
  private cycleStartTime: number = Date.now();
  private cyclePaused: boolean = false;
  private lastUpdate: number = Date.now();

  constructor() {
    this.data = this.generateInitialData();
    this.config = {
      targetTemperature: 200,
      heatingEnabled: true,
      simulationSpeed: 1
    };
  }

  private generateInitialData(): OvenData {
    return {
      timestamp: Date.now(),
      temperatureInside: 25,
      temperatureOutside: 22,
      pressure: 1.0,
      power: 0,
      humidity: 45,
      cycleTime: 0,
      doorOpen: false,
      heatingOn: false,
      targetTemperature: 200
    };
  }

  update(): OvenData {
    if (!this.isRunning) {
      this.data.timestamp = Date.now();
      return this.data;
    }

    const now = Date.now();
    const deltaTime = (now - this.lastUpdate) / 1000;
    this.lastUpdate = now;

    const { targetTemperature, heatingEnabled } = this.config;
    const currentTemp = this.data.temperatureInside;
    const outsideTemp = this.data.temperatureOutside;

    let newTempInside = currentTemp;
    let newPower = this.data.power;
    let heatingOn = false;

    if (heatingEnabled && !this.data.doorOpen) {
      if (currentTemp < targetTemperature) {
        const diff = targetTemperature - currentTemp;
        const rate = Math.min(2.5 * this.config.simulationSpeed, diff * 0.1);
        newTempInside = currentTemp + rate;
        heatingOn = true;
        newPower = Math.min(15, (diff / targetTemperature) * 15 + Math.random() * 2);
      } else {
        newPower = Math.random() * 2;
      }
    } else {
      const coolingRate = 0.5 * this.config.simulationSpeed;
      newTempInside = Math.max(outsideTemp, currentTemp - coolingRate);
      newPower = 0;
    }

    const tempDiff = Math.abs(newTempInside - outsideTemp);
    const pressure = 1.0 + (tempDiff / 500) + (Math.random() - 0.5) * 0.05;
    
    const baseHumidity = 45;
    const humidityChange = heatingOn ? -0.5 : 0.2;
    const newHumidity = Math.max(10, Math.min(80, baseHumidity + humidityChange * this.config.simulationSpeed + (Math.random() - 0.5) * 2));

    let cycleTime = this.data.cycleTime;
    if (!this.data.doorOpen && heatingOn && !this.cyclePaused) {
      cycleTime += deltaTime;
    }

    this.data = {
      timestamp: Date.now(),
      temperatureInside: Math.round(newTempInside * 100) / 100,
      temperatureOutside: outsideTemp + (Math.random() - 0.5) * 0.2,
      pressure: Math.round(pressure * 100) / 100,
      power: Math.round(newPower * 100) / 100,
      humidity: Math.round(newHumidity * 10) / 10,
      cycleTime: Math.round(cycleTime * 10) / 10,
      doorOpen: this.data.doorOpen,
      heatingOn,
      targetTemperature
    };

    return this.data;
  }

  setConfig(config: Partial<OvenConfig>): void {
    this.config = { ...this.config, ...config };
  }

  getConfig(): OvenConfig {
    return { ...this.config };
  }

  toggleDoor(): void {
    this.data.doorOpen = !this.data.doorOpen;
    if (this.data.doorOpen) {
      this.data.temperatureInside = Math.max(25, this.data.temperatureInside - 10);
      this.cyclePaused = true;
    } else {
      this.cyclePaused = false;
    }
  }

  setTargetTemperature(temp: number): void {
    this.config.targetTemperature = Math.max(0, Math.min(500, temp));
  }

  resetCycle(): void {
    this.cycleStartTime = Date.now();
    this.data.cycleTime = 0;
    this.cyclePaused = false;
  }

  start(): void {
    this.isRunning = true;
    this.lastUpdate = Date.now();
  }

  stop(): void {
    this.isRunning = false;
  }

  isActive(): boolean {
    return this.isRunning;
  }

  getData(): OvenData {
    return { ...this.data };
  }
}
