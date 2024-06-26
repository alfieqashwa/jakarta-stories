"use client"

import { Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { useMediaQuery } from "~/app/hooks/use-media-query"
import { Separator } from "~/components/ui/separator"
import { cn } from "~/lib/utils"
import { EMAIL, IG, PHONE } from "../app/constants/contact"
import { LINK_LIST } from "../app/constants/link-list"
import { ModeToggle } from "./mode-toggle"
import { Copyright } from "./copyright"

export function Footer() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
    <section>
      <Separator className="-px-10 bg-muted-foreground pt-0.5" />
      {isDesktop ? <DesktopFooter /> : <MobileFooter />}
      <Copyright />
    </section>
  )
}

const DesktopFooter = () => (
  <footer className="flex items-center justify-between p-16">
    {/* links */}
    <MenuLink />
    {/* company name */}
    <CompanyTitle />
    {/* socmed icons */}
    <SocialMedia />
  </footer>
)
const MobileFooter = () => (
  <footer className="space-y-16 pb-10 pt-20">
    {/* socmed icons */}
    <SocialMedia />

    {/* links */}
    <MenuLink />
    {/* company name */}
    <CompanyTitle />
  </footer>
)

export const SocialMedia = () => (
  <div className="flex items-center justify-center space-x-4">
    <a href={IG} target="_blank" rel="noopener noreferrer">
      <FaInstagram className="size-6 text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground" />
    </a>
    <a href={`mailto:${EMAIL}`}>
      <Mail className="size-6 text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground" />
    </a>
    <a
      href={`https://wa.me/${PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="size-6 text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground" />
    </a>
    <div className="hidden lg:block">
      <ModeToggle />
    </div>
  </div>
)

const MenuLink = () => {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col items-center space-y-4">
      {LINK_LIST.map((l, i) => (
        <Link
          href={l.href}
          className={cn(
            "text-sm font-semibold uppercase text-muted-foreground",
            pathname === l.href &&
              "text-foreground underline underline-offset-4",
          )}
          key={i}
        >
          {l.title}
        </Link>
      ))}
    </nav>
  )
}

const CompanyTitle = () => (
  <div className="whitespace-nowrap text-center text-3xl font-black uppercase text-zinc-500 sm:text-4xl lg:text-6xl xl:ml-20">
    <h2>Jakarta Stories</h2>
  </div>
)
