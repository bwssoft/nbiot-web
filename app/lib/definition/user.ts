
type Constructor = {
  uuid: string
  name: string
  password: string
  created_at: Date
}

export type IUser = Constructor;

export class User {
  readonly uuid: string
  readonly name: string
  readonly password: string
  readonly created_at: Date

  constructor(props: Constructor) {
    Object.assign(this, props)
  }
}
