'use server'

import { lastPackageRepo } from "../repository/last_package"

export const listMany = async () => {
  return await lastPackageRepo.list()
}
