import { ILastPackage } from "@/app/lib/definition/last_package";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ILastPackage>[] = [
  {
    header: 'Número serial',
    accessorKey: "serialNumber",
    cell: (cell) => <span>{cell.row.original.serialNumber?.toString()}</span>
  },
  {
    id: 'messageId',
    header: "ID da mensagem",
    cell: (cell) => {
      if (cell.row.original.from === 'KORE') {
        return cell.row.original.decoded["ID Msg"]
      }

      return cell.row.original.decoded.messageId
    }
  },
  {
    id: 'coords',
    header: "Coordenadas (latitude, longitude)",
    cell: (cell) => {
      if (cell.row.original.decoded.latitude === 0 && cell.row.original.decoded.longitude === 0) {
        return 'Sem sinal GPS'
      }
      
      return `${cell.row.original.decoded.latitude}, ${cell.row.original.decoded.longitude}`
    }
  },
  {
    id: "internalBattery",
    header: "Bateria interna",
    cell: (cell) => {
      if (cell.row.original.from === 'KORE') {
        return cell.row.original.decoded["bateria interna"]
      }

      return cell.row.original.decoded.internalBattery
    }
  },
  {
    id: "externalBattery",
    header: "Bateria externa",
    cell: (cell) => {
      if (cell.row.original.from === 'KORE') {
        return cell.row.original.decoded["bateria externa"]
      }

      return cell.row.original.decoded.externalBattery
    }
  },
  {
    id: "date",
    header: "Data",
    cell: (cell) => {
      if (cell.row.original.from === 'KORE') {
        let unix_timestamp = cell.row.original.decoded.timestamp;
        const date = new Date(unix_timestamp * 1000);
        return date.toLocaleString()
      }

      return cell.row.original.decoded.tsGps.toLocaleString()
    }
  },
];
