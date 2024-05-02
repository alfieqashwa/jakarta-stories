import { Instagram, Mail } from "lucide-react"
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Separator } from "~/components/ui/separator"

export const Footer = () => (
  <footer className="">
    <Separator className="bg-muted-foreground pt-0.5" />
    {/* socmed icons */}
    <div className="flex items-center justify-center space-x-3 pt-20">
      <FaInstagram className="size-5" />
      <Mail className="size-5" />
      <FaWhatsapp className="size-5" />
    </div>

    {/* links */}
    <nav className="flex flex-col items-center pt-20 font-medium uppercase underline">
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/contact">contact</Link>
    </nav>
    {/* company name */}
    <div className="whitespace-nowrap py-20 text-center text-3xl font-black uppercase text-zinc-500">
      <h2>Jakarta Stories</h2>
    </div>
  </footer>
)
