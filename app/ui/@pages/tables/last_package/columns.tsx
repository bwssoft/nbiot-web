import { ILastPackage } from "@/app/lib/definition/last_package";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ILastPackage<any>>[] = [
  {
    header: "Número Serial",
    accessorKey: "serialNumber",
    cell: (cell) => <span>{cell.row.original.serialNumber?.toString()}</span>,
  },
  {
    header: "Id Mensagem",
    accessorKey: "decoded.messageId",
    cell: (cell) => <span>{cell.row.original.decoded.messageId}</span>,
  },
  {
    header: "Latitude",
    accessorKey: "decoded.latitude",
    cell: (cell) => <span>{cell.row.original.decoded.latitude}</span>,
  },
  {
    header: "Longitude",
    accessorKey: "decoded.longitude",
    cell: (cell) => <span>{cell.row.original.decoded.longitude}</span>,
  },
  {
    header: "Bateria Interna",
    accessorKey: "decoded.internalBattery",
    cell: (cell) => <span>{cell.row.original.decoded.internalBattery}</span>,
  },
  {
    header: "Bateria Externa",
    accessorKey: "decoded.externalBattery",
    cell: (cell) => <span>{cell.row.original.decoded.internalBattery}</span>,
  },
  {
    header: "Data",
    accessorKey: "decoded.tsGps",
    cell: (cell) => (
      <span>{new Date(cell.row.original.decoded.tsGps).toLocaleString()}</span>
    ),
  },
];
