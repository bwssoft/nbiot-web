export interface UDPDecoded {
  deviceType: number;
  serialNumber: number;
  messageId: number;
  sequencyId: number;
  tsGps: Date;
  latitude: number;
  longitude: number;
  fixSat: string;
  altitude: number;
  speed: number;
  heading: number;
  externalBattery: number;
  internalBattery: number;
  input: number;
  output: number;
  hodometer: number;
  time: number;
  internalTemp: number;
  networkInfo: number;
}

export interface KOREDecoded {
  deviceType: string;
  serialNumber: string | number;
  messageId: string;
  sequencieId: string;
  tsGps: number;
  latitude: string;
  longitude: string;
  "gps status": number;
  "qtde Sat": number;
  altitude: number;
  speed: number;
  direcao: number;
  externalBattery: number;
  internalBattery: number;
  "ignicao status": number;
  "bateria status": number;
  "estado bloqueio": number;
  odometer: number;
  horimetro: number;
  internalTemp: number;
  networkInfo: number;
}