import { listMany } from "@/app/lib/action/last_package";
import { LastPackageTable } from "@/app/ui/tables/last_package";
import { InputComponent } from "@/app/ui/input/index";
import { Button } from "@bwsoft/button";

export default async function Table() {
  const packages = await listMany();
  return (
    <main className="grid grid-rows-[min-content_1fr] gap-4 p-24">
      <div className="mb-12">
        <h1 className="mb-4">Últimos dados recebidos</h1>
        <div className="flex gap-4">
          <InputComponent />
          <Button type="submit" className=" w-20 bg-indigo-200 text-indigo-700">
            Buscar
          </Button>
        </div>
      </div>
      <LastPackageTable data={packages} />
    </main>
  );
}
