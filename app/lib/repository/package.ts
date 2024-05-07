import { IPackage } from "../definition/package";
import connection from "./connection";
import { Collection, WithId, Filter } from "mongodb";

async function connect() {
  const client = await connection;
  const db = client.db("nb-iot");
  return db;
}

async function list(params: Filter<IPackage> = {}) {
  const db = await connect();
  const pack: Collection<IPackage> = db.collection("package");
  const data = await pack.find(params).project({ _id: 0 }).toArray();
  return data as IPackage[]
}

async function findOne(params: Partial<WithId<IPackage>>) {
  const db = await connect();
  return await db.collection<IPackage>('package').findOne(params);
}

export const packageRepo = {
  list,
  findOne,
}