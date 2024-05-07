import { listMany } from "@/app/lib/action/last_package";
import { IPackage } from "@/app/lib/definition/package";
import Map from "@/app/ui/map";

export default async function MapPage() {
  const packages = await listMany();
  return (
    <main>
      <Map
        packages={
          packages as IPackage<{ latitude: number; longitude: number }>[]
        }
      />
    </main>
  );
}
