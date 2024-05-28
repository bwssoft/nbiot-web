// import { listMany } from "@/app/lib/action/last_package";
import { listMany } from "@/app/lib/action/search_package";

import { ILastPackage } from "@/app/lib/definition/last_package";
import { LastPackageTable } from "@/app/ui/@pages/tables/last_package";
import { Filter } from "mongodb";
import { SerialTableFilter } from "./filter";

interface Params {
  searchParams: {
    serialNumber?: string;
  }
}

export default async function Table({ searchParams }: Params) {
  async function fetchPackages() {
    const query: Filter<ILastPackage> = {};

    if (searchParams.serialNumber) {
      query['serialNumber'] = Number(searchParams.serialNumber);
    }

    return await listMany(query);
  }

  const packages = await fetchPackages();
  
  return (
    <main className="gap-4 flex justify-center p-8">
      <div className="grid gap-4 container grid-rows-[min-content_1fr] ">
        <div>
          <h1 className="mb-4">Últimos dados recebidos</h1>
          <div>
            <SerialTableFilter />
          </div>
        </div>
        <LastPackageTable data={packages} />
      </div>
    </main>
  );
}
