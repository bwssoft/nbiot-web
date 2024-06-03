import { listMany } from "@/app/lib/action/search_package";
import { SerialMapFilter } from "./filter";
import { Filter } from "mongodb";
import { ILastPackage } from "@/app/lib/definition/last_package";
import { SideBar } from "./side-bar";
import { MapComponent } from "./map";

interface Params {
  searchParams: {
    serialNumber?: string;
    modal?: string;
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
      <div className="grid gap-4 container grid-rows-[min-content_1fr]">
        {searchParams?.modal === "1" && searchParams?.serialNumber ? (
          <SideBar serialNumber={searchParams.serialNumber} />
        ) : (
          <></>
        )}
        <div>
          <h1 className="mb-4">Mapa</h1>
          <div>
            <SerialMapFilter />
          </div>
        </div>
        <MapComponent packages={packages} />
      </div>
    </main>
  );
}
