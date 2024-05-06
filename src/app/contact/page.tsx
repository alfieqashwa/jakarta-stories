import { Mail, Phone } from "lucide-react"
import { Metadata } from "next"
import { FaInstagram } from "react-icons/fa"
import { EMAIL } from "../constants/contact"

export const metadata: Metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <div className="flex min-h-[calc(100vh_-_8rem)] flex-col items-center pt-12">
      <h2 className="text-5xl font-bold capitalize lg:text-6xl">contact</h2>
      <article className="mt-20 flex flex-col items-center space-y-2 py-16 text-lg font-medium lg:space-y-4 lg:text-xl">
        <section className="flex items-center">
          <Mail className="mr-2 size-6 text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground lg:size-7" />
          <p>{EMAIL}</p>
        </section>
        <section className="flex items-center">
          <Phone className="mr-2 size-6 text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground lg:size-7" />
          <p>(+62) 895-4117-61183</p>
        </section>
        <section className="flex items-center">
          <FaInstagram className="mr-2 size-6 text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground lg:size-7" />
          <p>@jakartastoriesid</p>
        </section>
      </article>
    </div>
  )
}
