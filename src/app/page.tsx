"use client"

import { Clapperboard } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "./hooks/use-media-query"
import { Hero } from "~/components/hero"

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  return (
    <main className="min-h-[calc(100vh_-_8rem)] py-12">
      <div className="pb-4">
        <p className="flex flex-col items-center text-6xl font-black uppercase leading-10 tracking-wider sm:text-7xl sm:leading-10 lg:text-9xl">
          <span className="text-muted-foreground/40">jakarta</span>
          <span className="text-muted-foreground/90 lg:hidden">stories</span>
        </p>
      </div>
      <Hero />
      <p className="hidden flex-col items-center text-9xl font-black uppercase tracking-wider lg:flex">
        <span className="text-muted">stories</span>
      </p>
      <div className="px-4 pt-8">
        {["quick explore", "city snapshot", "local gems"].map((text, i) => (
          <article key={i} className="flex items-center space-x-2">
            <Clapperboard />
            <p className="whitespace-nowrap text-2xl font-semibold capitalize lg:text-3xl">
              {text}
            </p>
          </article>
        ))}
      </div>
      <div className="flex flex-col gap-12 py-4 lg:flex-row lg:justify-center lg:gap-8">
        {isDesktop ? (
          <div className="flex flex-row justify-center gap-6 py-12">
            <Image
              src="/images/22.png"
              alt="content"
              width={300}
              height={300}
              className="object-cover"
            />
            <Image
              src="/images/24.png"
              alt="content"
              width={400}
              height={400}
              className="object-cover"
            />
            <Image
              src="/images/22.png"
              alt="content"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-12 py-4">
            <Image
              src="/images/22.png"
              alt="content"
              width={600}
              height={300}
              className="object-cover"
            />
            <Image
              src="/images/24.png"
              alt="content"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col items-end px-4">
        {["jakarta highlights", "cultutral snippet", "family fun day"].map(
          (text, i) => (
            <article key={i} className="flex items-center space-x-2">
              <Clapperboard />
              <p className="whitespace-nowrap text-2xl font-semibold capitalize lg:text-3xl">
                {text}
              </p>
            </article>
          ),
        )}
      </div>

      {isDesktop ? (
        <div className="flex items-center justify-center gap-6 py-12">
          <Image
            src="/images/23.png"
            alt="content"
            width={300}
            height={300}
            className="object-cover"
          />
          <Image
            src="/images/27.png"
            alt="content"
            width={400}
            height={400}
            className="object-cover"
          />
          <Image
            src="/images/26.png"
            alt="content"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-12 py-4">
          <Image
            src="/images/27.png"
            alt="content"
            width={600}
            height={600}
            className="object-cover"
          />
          <Image
            src="/images/26.png"
            alt="content"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col items-center px-4">
        {["gulinary delight", "night out"].map((text, i) => (
          <article key={i} className="flex items-center space-x-2">
            <Clapperboard />
            <p className="whitespace-nowrap text-2xl font-semibold capitalize lg:text-3xl">
              {text}
            </p>
          </article>
        ))}
      </div>
      {/* <div className="space-y-12 py-8">
        <Image
          src="/images/23.png"
          alt="content"
          width={600}
          height={600}
          className="object-cover"
        />
        <Image
          src="/images/29.png"
          alt="content"
          width={600}
          height={600}
          className="object-cover"
        />
      </div> */}
    </main>
  )
}
