
type Constructor<Decoded> = {
  decoded: Decoded
  package: string
  created_at: Date
  remote_info: RemoteInfo
  serialNumber: number | string
}

export type IPackage<Decoded extends Object = Object> = Constructor<Decoded>;

type RemoteInfo = {
  address: string;
  family: "IPv4" | "IPv6";
  port: number;
  size: number;
}

export class Package<Decoded> {
  readonly decoded: Decoded
  readonly package: string
  readonly created_at: Date
  readonly remote_info: RemoteInfo
  readonly serialNumber: number | string

  constructor(props: Constructor<Decoded>) {
    Object.assign(this, props)
  }
}



export interface LocationDecoded {
  deviceType: number
  serialNumber: number
  messageId: number
  sequencyId: number
  tsGps: Date
  latitude: number
  longitude: number
  fixSat: 'valid' | 'invalid'
  altitude: number
  speed: number
  heading: number
  externalBattery: number
  internalBattery: number
  input: number
  output: number
  hodometer: number
  timer: number
  internalTemp: number
  networkInfo: number
}