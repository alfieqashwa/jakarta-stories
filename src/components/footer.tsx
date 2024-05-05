import { Mail } from "lucide-react"
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Separator } from "~/components/ui/separator"
import { EMAIL, IG, PHONE } from "../app/constants/contact"
import { LINK_LIST } from "../app/constants/link-list"

export const Footer = () => (
  <footer className="">
    <Separator className="bg-muted-foreground pt-0.5" />
    {/* socmed icons */}
    <div className="flex items-center justify-center space-x-3 pt-20">
      <a href={IG} target="_blank" rel="noopener noreferrer">
        <FaInstagram className="size-5" />
      </a>
      <a href={`mailto:${EMAIL}`}>
        <Mail className="size-5" />
      </a>
      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="size-5" />
      </a>
    </div>

    {/* links */}
    <nav className="flex flex-col items-center space-y-2 pt-20 font-medium uppercase underline underline-offset-4">
      {LINK_LIST.map((l, i) => (
        <Link href={l.href} key={i}>
          {l.title}
        </Link>
      ))}
    </nav>
    {/* company name */}
    <div className="whitespace-nowrap py-20 text-center text-3xl font-black uppercase text-zinc-500">
      <h2>Jakarta Stories</h2>
    </div>
  </footer>
)
