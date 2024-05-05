import Image from "next/image"

export default function About() {
  return (
    <div className="flex min-h-[calc(100vh_-_8rem)] flex-col items-center py-12">
      <h2 className="text-5xl font-bold capitalize lg:text-6xl">about</h2>
      <div className="pt-4 sm:pt-8">
        <Image
          src="/images/25.png"
          alt="profile pic"
          width={600}
          height={600}
          className="object-bottom sm:rounded-sm"
        />
        <p className="pt-1.5 text-center text-xl font-black uppercase tracking-widest md:pt-3 md:text-2xl lg:text-4xl">
          Abdullah
        </p>
      </div>
      <article className="p-4 sm:p-8">
        <p className="text-balance text-center text-lg font-semibold text-muted-foreground md:text-xl">
          I am an experienced person in the field of character development and
          am interested in everything positive in every source of life, but in
          the professional field I have experience and interest in human
          self-development, sales, management, film, photography, music and all
          forms of beauty. on the other hand, I am a person who has a high
          interest in knowing myself, the universe and the Almighty Creator.
        </p>
      </article>
    </div>
  )
}
