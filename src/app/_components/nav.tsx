"use client"

import { Spiral as Hamburger } from "hamburger-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer"
import { cn } from "~/lib/utils"
import { LINK_LIST } from "../constants/link-list"

export const Nav = () => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  return (
    <nav className="mx-4 my-4 flex items-center">
      <h1 className="text-2xl font-black uppercase tracking-widest">
        jakarta stories
      </h1>
      <div className={cn("absolute right-2 z-[100]")}>
        <Hamburger toggled={open} onToggle={setOpen} />
      </div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="sr-only">open</DrawerTrigger>
        <DrawerContent className="bg-foreground">
          <section className="flex flex-col items-center space-y-2 py-32 text-2xl font-medium uppercase text-muted">
            {LINK_LIST.map((l, i) => (
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  pathname === l.href && "underline underline-offset-4",
                )}
                key={i}
              >
                {l.title}
              </Link>
            ))}
          </section>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}
