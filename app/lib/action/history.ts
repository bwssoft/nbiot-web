'use server'

import { Filter } from "mongodb"
import { IPackage } from "../definition/package"
import { packageRepo } from "../repository/package"

export const listMany = async (params?: Filter<IPackage>) => {
  return await packageRepo.list(params)
}
