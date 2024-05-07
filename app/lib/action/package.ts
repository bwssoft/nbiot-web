'use server'

import { packageRepo } from "../repository/package"

export const listMany = async () => {
  return await packageRepo.list()
}
