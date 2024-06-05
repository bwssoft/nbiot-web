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

      return `${Number(cell.row.original.decoded.latitude).toFixed(
        5
      )}, ${Number(cell.row.original.decoded.longitude).toFixed(5)}`;
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
      return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date(cell.row.original.created_at));
    },
  },
];
