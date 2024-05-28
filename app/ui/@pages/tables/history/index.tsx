"use client";

import { useMediaQuery } from "@/app/hook/use-media-query";
import { IPackage } from "@/app/lib/definition/package";
import { DataTableDesktop, DataTableMobile } from "../../../table";
import { columns } from "./columns";

type HistoryTableProps = {
  data: IPackage[];
};

export function HistoryTable({ data }: HistoryTableProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <DataTableDesktop data={data} columns={columns} />
    );
  }

  return (
    <DataTableMobile
      data={data}
      mobileKeyExtractor={(data) => data?.serialNumber?.toString()}
      mobileDisplayValue={(data) => (
        <div className="flex flex-col">
          <ul className="space-y-2">
            <li className="flex flex-col">
              <span className="text-gray-500">Número Serial</span>
              <span>{data?.serialNumber?.toString()}</span>
            </li>
          </ul>
        </div>
      )}
    />
  );
}
