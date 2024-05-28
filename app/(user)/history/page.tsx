import { listMany } from "@/app/lib/action/history";
import { IPackage } from "@/app/lib/definition/package";
import { HistoryTable } from "@/app/ui/@pages/tables/history";
import { Filter } from "mongodb";
import { HistoryTableFilter } from "./filter";

interface Params {
  searchParams: {
    serialNumber?: string;
  }
}

export default async function Table({ searchParams }: Params) {
  async function fetchTrackerPackages() {
    const query: Filter<IPackage> = {};

    if (searchParams.serialNumber) {
      query.$or = [
        { serialNumber: searchParams.serialNumber },
        { serialNumber: Number(searchParams.serialNumber) },
      ];
      return await listMany(query);
    }

    return [];
  }

  const history = await fetchTrackerPackages();

  return (
    <main className="gap-4 flex justify-center p-8 overflow-y-auto">
      <div className="grid gap-4 container grid-rows-[min-content_1fr] h-full">
        <div>
          <h1 className="mb-4">Página de histórico</h1>

          <HistoryTableFilter />

          <small className="text-gray-500">Busque por um número de serial para preencher a tabela abaixo.</small>
        </div>

        <HistoryTable data={history} />
      </div>
    </main>
  );
}
