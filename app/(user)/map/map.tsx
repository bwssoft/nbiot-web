"use client";
import Map from "@/app/ui/@pages/map";
import { IPackage } from "@/app/lib/definition/package";
import { formatSearchParams } from "@/app/util/formatSearchParams";
import { usePathname, useRouter } from "next/navigation";

export function MapComponent(props: { packages: IPackage<any>[] }) {
  const pathname = usePathname();
  const router = useRouter();

  const onClick = (pack: { serialNumber: string }) => {
    const params = formatSearchParams({
      serialNumber: pack.serialNumber,
      modal: 1,
    });

    router.push(`${pathname}?${params}`);
  };

  return (
    <Map packages={props.packages as IPackage<any>[]} onClickIcon={onClick} />
  );
}
