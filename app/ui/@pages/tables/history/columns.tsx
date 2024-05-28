import { IPackage } from "@/app/lib/definition/package";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IPackage<any>>[] = [
  {
    header: "Número Serial",
    accessorKey: "serialNumber",
    cell: (cell) => <span>{cell.row.original.serialNumber?.toString()}</span>,
  },
  {
    id: 'messageId',
    header: "ID da mensagem",
    cell: (cell) => {
      const data = cell.row.original;
      return data.decoded["ID Msg"] ?? data.decoded.messageId
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
      const data = cell.row.original;
      return data.decoded['bateria interna'] ?? data.decoded.internalBattery 
    }
  },
  {
    id: "externalBattery",
    header: "Bateria externa",
    cell: (cell) => {
      const data = cell.row.original;
      return data.decoded['bateria externa'] ?? data.decoded.externalBattery 
    }
  },
  {
    id: "date",
    header: "Data",
    cell: (cell) => {
      if (cell.row.original.decoded.timestamp) {
        let unix_timestamp = cell.row.original.decoded.timestamp;
        const date = new Date(unix_timestamp * 1000);
        return date.toLocaleString()
      }

      return cell.row.original.decoded.tsGps.toLocaleString()
    }
  }
];
