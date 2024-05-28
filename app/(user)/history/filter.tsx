"use client"

import { InputComponent } from "@/app/ui/input/index";
import { formatSearchParams } from "@/app/util/formatSearchParams";
import { Button } from "@bwsoft/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function HistoryTableFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onAction = (formData: FormData) => {
    const _formData = Object.fromEntries(formData.entries()) as { serialNumber: string };

    const params = formatSearchParams({
      serialNumber: _formData.serialNumber
    })

    router.push(`${pathname}?${params}`)
  }

  const onClearClick = () => {
    router.push(pathname);
  }

  return (
    <form action={onAction} className="flex items-end gap-4">
      <InputComponent label="Pesquisar por número serial" name="serialNumber" />
      {searchParams.size !== 0 && (
        <Button
          onClick={onClearClick}
          type="button"
          variant="outline"
          className="w-52 h-9"
        >
          Limpar serial atual
        </Button>
      )}
      <Button
        type="submit"
        className="w-20 h-9 bg-indigo-200 text-indigo-700"
      >
        Buscar
      </Button>
    </form>
  )
}