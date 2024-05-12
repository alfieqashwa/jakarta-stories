import { Metadata } from "next"
import Image from "next/image"
import { passion } from "../constants/images"

export const metadata: Metadata = {
  title: "About",
}

export default function OurStory() {
  return (
    <div className="flex min-h-[calc(100vh_-_8rem)] flex-col items-center py-12">
      <h2 className="text-5xl font-bold capitalize lg:text-6xl">our story</h2>
      <div className="pt-4 sm:pt-8">
        <Image
          src={passion}
          alt="abdullah"
          placeholder="blur"
          className="object-bottom sm:rounded-sm"
        />
      </div>
      <article className="mt-4 space-y-4 text-balance p-4 text-center text-lg font-semibold text-muted-foreground sm:p-8 md:text-xl">
        <p>
          Among the glittering city of Jakarta, there are precious moments that
          are often lost in the crowd. Families strolling under the warm
          sunshine at Taman Mini, couples holding hands under the sparkling
          night lights at Bundaran HI, or even children laughing cheerfully in
          the gentle arms of their parents at Monas - all are vivid portraits of
          life valuable.
        </p>
        <p>
          However, in the hustle and bustle of modern life, beautiful moments
          like these often disappear without a trace, forgotten in the flow of
          time. That&apos;s what prompted us to establish JakartaStories - a
          video production company that aims to capture every precious moment in
          your life.
        </p>
        <p>
          We believe that every moment is worth capturing, every second is worth
          remembering. With a passion for presenting the best quality in each of
          our works, we are committed to helping you record, save and share your
          precious moments with your loved ones.
        </p>
        <p>
          At Jakarta Stories, we are not just a video production service
          provider. We are partners on your life journey, accompanying you every
          step of the way towards achieving your dreams. From small, meaningful
          moments to big events in your life, we are ready to help you capture
          them perfectly.
        </p>
        <p>
          Join us on an adventure to create lasting memories. Make your every
          precious moment part of an unforgettable life story. Together,
          let&apos;s carve out a trail of memories that will be cherished
          forever.
        </p>
        <p>
          Welcome to <span className="text-xl font-bold">Jakarta Stories</span>{" "}
          - here, every moment is a story worth telling.
        </p>
      </article>
    </div>
  )
}
