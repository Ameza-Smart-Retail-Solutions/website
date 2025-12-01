import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = PropsWithChildren<{
  className?: string;
}>;

export default function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return <div className={cn("mx-auto w-full max-w-[1728px]", className)}>{children}</div>;
}
