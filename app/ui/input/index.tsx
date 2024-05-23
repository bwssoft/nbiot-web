"use client";

import {
  Input,
  InputLabel,
  InputGroup,
  InputAddOn,
  InputField,
  InputError,
} from "@bwsoft/input";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function InputComponent() {
  return (
    <Input>
      <InputLabel>Pesquisar por número serial</InputLabel>
      <InputGroup>
        {/* <InputAddOn Icon={MagnifyingGlassIcon} side="left" /> */}
        <InputField
          placeholder="305419896"
          onChange={() => console.log("pinto beans")}
        />
      </InputGroup>
      {/* <InputError show={errors.limit_speed?.message !== undefined}>
        {errors.limit_speed?.message}
      </InputError> */}
    </Input>
  );
}
