"use client";

import { useFormStatus } from "react-dom";
import { cn } from "../util/cn";
import { Button as BSButton } from "@bwsoft/button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: Props) {
  const { children, disabled, className, ...rest } = props;
  const { pending } = useFormStatus();
  return (
    <BSButton
      {...rest}
      disabled={disabled ?? pending}
      className={cn(
        "rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </BSButton>
  );
}
