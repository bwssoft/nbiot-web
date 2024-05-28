"use client";

import {
  Input,
  InputField,
  InputGroup,
  InputLabel
} from "@bwsoft/input";
import { ComponentProps } from "react";

interface InputComponentProps extends Omit<ComponentProps<typeof InputField>, 'children'> {
  label?: string;
}

export function InputComponent({ label, ...rest }: InputComponentProps) {
  return (
    <Input >
      {label && (
        <InputLabel>{label}</InputLabel>
      )}
      <InputGroup>
        {/* <InputAddOn Icon={MagnifyingGlassIcon} side="left" /> */}
        <InputField
          {...rest}
          placeholder="305419896"
        />
      </InputGroup>
      {/* <InputError show={errors.limit_speed?.message !== undefined}>
        {errors.limit_speed?.message}
      </InputError> */}
    </Input>
  );
}
