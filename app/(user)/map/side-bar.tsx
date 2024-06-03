import { lastPackageRepo } from "@/app/lib/repository/last_package";
import DeviceSideBar from "@/app/ui/device-side-bar";

export async function SideBar(props: { serialNumber: string }) {
  const pack = await lastPackageRepo.findOne({
    serialNumber: props.serialNumber,
  });
  if (!pack) {
    return <></>;
  }
  return (
    <DeviceSideBar
      serialNumber={pack?.serialNumber}
      coords={`${pack.decoded.latitude}, ${pack.decoded.longitude}`}
      from={pack?.from}
      altitude={pack.decoded.altitude}
      internalBattery={pack.decoded.internalBattery}
      externalBattery={pack.decoded.externalBattery}
      speed={pack.decoded.speed}
      tsGps={new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date(pack.created_at))}
    />
  );
}
