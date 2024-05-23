"use client";

import { formatSearchParams } from "@/app/util/formatSearchParams";
import {
  Input,
  InputLabel,
  InputGroup,
  InputAddOn,
  InputField,
  InputError,
} from "@bwsoft/input";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";

export function InputComponent() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Input>
      <InputLabel>Pesquisar por número serial</InputLabel>
      <InputGroup>
        {/* <InputAddOn Icon={MagnifyingGlassIcon} side="left" /> */}
        <InputField
          placeholder="305419896"
          onChange={(e) => {
            const params = formatSearchParams({
              serial_code: e.target.value,
            });

            router.push(`${pathname}?${params}`);
          }}
        />
      </InputGroup>
      {/* <InputError show={errors.limit_speed?.message !== undefined}>
        {errors.limit_speed?.message}
      </InputError> */}
    </Input>
  );
}
