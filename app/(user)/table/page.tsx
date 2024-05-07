import { listMany } from "@/app/lib/action/last_package";
import { LastPackageTable } from "@/app/ui/tables/last_package";

export default async function Table() {
  const packages = await listMany();
  return (
    <main className="grid grid-rows-[min-content_1fr] gap-4 p-24">
      <h1>Últimos dados recebidos</h1>
      <LastPackageTable data={packages} />
    </main>
  );
}
