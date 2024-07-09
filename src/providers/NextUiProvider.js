"use client"

import { NextUIProvider } from "@nextui-org/system"
export function NextUiProviders({children}) {
    return (
      <NextUIProvider disableBaseline="true">
        {children}
      </NextUIProvider>
    )
  }