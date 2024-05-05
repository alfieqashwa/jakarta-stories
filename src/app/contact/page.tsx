import { Mail, Phone } from "lucide-react"
import { EMAIL } from "../constants/contact"

export default function Contact() {
  return (
    <div className="flex min-h-[calc(100vh_-_4rem)] flex-col items-center py-16">
      <h2 className="text-4xl font-semibold capitalize">contact</h2>
      <article className="flex flex-col items-center py-16 text-lg font-medium">
        <section className="flex items-center">
          <Mail className="mr-2 size-5" />
          <p>{EMAIL}</p>
        </section>
        <section className="flex items-center">
          <Phone className="mr-2 size-5" />
          <p>(+62) 895-4117-61183</p>
        </section>
      </article>
    </div>
  )
}
