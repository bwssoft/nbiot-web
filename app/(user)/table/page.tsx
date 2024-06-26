// import { listMany } from "@/app/lib/action/last_package";
import { listMany } from "@/app/lib/action/search_package";
import { Revalidate } from "@/app/ui/auto-refresh";
import { ILastPackage } from "@/app/lib/definition/last_package";
import { LastPackageTable } from "@/app/ui/@pages/tables/last_package";
import { Filter } from "mongodb";
import { SerialTableFilter } from "./filter";

interface Params {
  searchParams: {
    serialNumber?: string;
  };
}

export default async function Table({ searchParams }: Params) {
  let query: Filter<ILastPackage> = {};

  if (searchParams.serialNumber) {
    query = { serialNumber: { $regex: searchParams.serialNumber } };
  }

  const packages = await listMany(query);

  return (
    <main className="gap-4 flex justify-center p-8">
      <div className="grid gap-4 container grid-rows-[min-content_1fr] ">
        <div>
          <div className="flex justify-between">
            <h1 className="mb-4">Últimos dados recebidos</h1>
            <Revalidate path="/table" />
          </div>
          <div>
            <SerialTableFilter />
          </div>
        </div>
        <LastPackageTable data={packages} />
      </div>
    </main>
  );
}
