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
      deviceType={pack?.decoded.deviceType}
      tsGps={
        pack.from === "LW"
          ? new Date(pack.decoded.tsGps * 1000).toLocaleString()
          : pack.decoded.tsGps.toLocaleString()
      }
    />
  );
}
