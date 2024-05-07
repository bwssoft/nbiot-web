import { IUser } from "../definition/user";
import connection from "./connection";
import { Collection, WithId, Filter } from "mongodb";

async function connect() {
  const client = await connection;
  const db = client.db("nb-iot");
  return db;
}

async function list(params: Filter<IUser> = {}) {
  const db = await connect();
  const user: Collection<IUser> = db.collection("user");
  const data = await user.find(params).toArray();
  return data as IUser[]
}

async function findOne(params: Partial<WithId<IUser>>) {
  const db = await connect();
  return await db.collection<IUser>('user').findOne(params);
}

export const userRepo = {
  list,
  findOne,
}