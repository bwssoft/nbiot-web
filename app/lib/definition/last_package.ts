import { KOREDecoded, UDPDecoded } from "./decoded"
import { IPackage, Package } from "./package"

export type ILastPackage = |
  IPackage<UDPDecoded> & {
    from: 'UDP'
  }
  | IPackage<KOREDecoded> & {
    from: 'KORE'
  }


export class LastPackage<Decoded> extends Package<Decoded> { }


