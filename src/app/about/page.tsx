import { Metadata } from "next"
import Image from "next/image"
import { image25 } from "../constants/images"

export const metadata: Metadata = {
  title: "About",
}

export default function About() {
  return (
    <div className="flex min-h-[calc(100vh_-_8rem)] flex-col items-center py-12">
      <h2 className="text-5xl font-bold capitalize lg:text-6xl">about</h2>
      <div className="pt-4 sm:pt-8">
        <Image
          src={image25}
          alt="abdullah"
          placeholder="blur"
          className="object-bottom sm:rounded-sm"
        />
        <p className="pt-1.5 text-center text-xl font-black uppercase tracking-widest md:pt-3 md:text-2xl lg:text-4xl">
          Abdullah
        </p>
      </div>
      <article className="p-4 sm:p-8">
        <p className="text-balance text-center text-lg font-semibold text-muted-foreground md:text-xl">
          In the professional sphere, I have expertise and interest in human,
          self-development, sales, management, film, photography, music, and all
          forms of beauty. I also have experience in character development and
          am always trying to find the positive in all aspects of life. On a
          more personal level, I consider myself to be a person who is really
          curious about myself, the Almighty Creator, and the universe.
        </p>
      </article>
    </div>
  )
}
