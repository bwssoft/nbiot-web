import { ILastPackage } from "../definition/last_package";
import connection from "./connection";
import { Collection, WithId, Filter } from "mongodb";

async function connect() {
  const client = await connection;
  const db = client.db("nb-iot");
  return db;
}

async function list(params: Filter<ILastPackage> = {}) {
  const db = await connect();
  const pack: Collection<ILastPackage> = db.collection("last_package");
  const data = await pack.find(params).project({ _id: 0 }).toArray();
  return data as ILastPackage[]
}

async function findOne(params: Partial<WithId<ILastPackage>>) {
  const db = await connect();
  return await db.collection<ILastPackage>('last_package').findOne(params);
}

export const lastPackageRepo = {
  list,
  findOne,
}