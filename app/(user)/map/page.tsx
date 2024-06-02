import { listMany } from "@/app/lib/action/search_package";
import { IPackage } from "@/app/lib/definition/package";
import Map from "@/app/ui/@pages/map";
import { SerialMapFilter } from "./filter";
import { Filter } from "mongodb";
import { ILastPackage } from "@/app/lib/definition/last_package";

interface Params {
  searchParams: {
    serialNumber?: string;
  };
}

export default async function MapPage({ searchParams }: Params) {
  let query: Filter<ILastPackage> = {};

  if (searchParams.serialNumber) {
    query = { serialNumber: { $regex: searchParams.serialNumber } };
  }

  const packages = await listMany(query);

  return (
    <main className="gap-4 flex justify-center p-8">
      <div className="grid gap-4 container grid-rows-[min-content_1fr] ">
        <div>
          <h1 className="mb-4">Mapa</h1>
          <div>
            <SerialMapFilter />
          </div>
        </div>
        <Map
          packages={
            packages as IPackage<{ latitude: number; longitude: number }>[]
          }
        />
      </div>
    </main>
  );
}
