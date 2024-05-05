"use client"

import { Spiral as Hamburger } from "hamburger-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useMediaQuery } from "~/app/hooks/use-media-query"
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer"
import { cn } from "~/lib/utils"
import { LINK_LIST } from "../app/constants/link-list"
import { SocialMedia } from "./footer"
import { ModeToggle } from "./mode-toggle"

export const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  if (isDesktop) {
    return <DesktopNav />
  }
  return <MobileNav />
}

const DesktopNav = () => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  return (
    <nav className="mx-8 my-4 flex items-center justify-between sm:my-8">
      <section className="flex items-center space-x-4 font-semibold uppercase">
        {LINK_LIST.map((l, i) => (
          <Link
            href={l.href}
            onClick={() => setOpen(false)}
            className={cn(
              "text-muted-foreground",
              pathname === l.href &&
                "text-foreground underline underline-offset-4",
            )}
            key={i}
          >
            {l.title}
          </Link>
        ))}
      </section>
      <h1 className="-ml-32 text-2xl font-black uppercase tracking-widest sm:text-4xl md:text-2xl lg:text-4xl">
        jakarta stories
      </h1>
      <SocialMedia />
    </nav>
  )
}

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  return (
    <nav className="m-4 flex items-center sm:m-8">
      <h1 className="text-2xl font-black uppercase tracking-widest sm:text-4xl md:text-2xl">
        jakarta stories
      </h1>
      <div className={cn("absolute right-2 z-[100]")}>
        <Hamburger toggled={open} onToggle={setOpen} />
      </div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="sr-only">open</DrawerTrigger>
        <DrawerContent className="bg-foreground">
          <section className="flex flex-col items-center space-y-2 py-32 text-2xl font-medium uppercase text-muted">
            <ModeToggle />
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
