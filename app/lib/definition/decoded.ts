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
  device_Type: string;
  serial: string | number;
  "ID Msg": string;
  "sub ID Msg": string;
  timestamp: number;
  latitude: string;
  longitude: string;
  "gps status": number;
  "qtde Sat": number;
  altitude: number;
  velocidade: number;
  direcao: number;
  "bateria externa": number;
  "bateria interna": number;
  "ignicao status": number;
  "bateria status": number;
  "estado bloqueio": number;
  hodometro: number;
  horimetro: number;
  temperatura: number;
  "network info": number;
}