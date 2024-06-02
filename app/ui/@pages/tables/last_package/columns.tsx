import { ILastPackage } from "@/app/lib/definition/last_package";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ILastPackage>[] = [
  {
    header: "Número serial",
    accessorKey: "serialNumber",
    cell: (cell) => <span>{cell.row.original.serialNumber?.toString()}</span>,
  },
  {
    id: "coords",
    header: "Coordenadas (latitude, longitude)",
    cell: (cell) => {
      if (
        cell.row.original.decoded.latitude === 0 &&
        cell.row.original.decoded.longitude === 0
      ) {
        return "Sem sinal GPS";
      }

      return `${cell.row.original.decoded.latitude}, ${cell.row.original.decoded.longitude}`;
    },
  },
  {
    id: "connection_type",
    header: "Conexão",
    cell: (cell) => {
      return cell.row.original.from;
    },
  },
  {
    id: "date",
    header: "Data",
    cell: (cell) => {
      if (cell.row.original.from === "LW") {
        let unix_timestamp = cell.row.original.decoded.tsGps;
        const date = new Date(unix_timestamp * 1000);
        return date.toLocaleString();
      }

      return cell.row.original.decoded.tsGps.toLocaleString();
    },
  },
];
