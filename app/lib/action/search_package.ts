'use server'

import { Filter } from "mongodb"
import { lastPackageRepo } from "../repository/last_package"
import { ILastPackage } from "../definition/last_package"

export const listMany = async (params: Filter<ILastPackage>) => {
  return await lastPackageRepo.list(params)
}
