import { IPackage, Package } from "./package"


export type ILastPackage<Decoded extends Object = Object> = IPackage<Decoded>

export class LastPackage<Decoded> extends Package<Decoded> { }


