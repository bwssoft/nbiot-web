import { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      name: string;
      created_at: Date;
      uuid: string;
    }
  }

  interface User {
    name: string;
    created_at: Date;
    uuid: string;
  }
}