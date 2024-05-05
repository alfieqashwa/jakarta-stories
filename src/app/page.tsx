import Image from "next/image"
import { Button } from "~/components/ui/button"

const IMAGES = [
  { src: "/images/23.png", alt: "23" },
  { src: "/images/24.png", alt: "24" },
  { src: "/images/25.png", alt: "25" },
  { src: "/images/26.png", alt: "26" },
  { src: "/images/27.png", alt: "27" },
  { src: "/images/28.png", alt: "28" },
  { src: "/images/29.png", alt: "29" },
] as const
export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh_-_8rem)] flex-col items-center justify-between pt-12">
      <h1 className="text-4xl font-bold capitalize lg:text-6xl">home</h1>

      {/* <div>
        {IMAGES.map((img, i) => (
          <Image
            src={img.src}
            alt={img.alt}
            width={1200}
            height={1200}
            key={i}
            className="py-4"
          />
        ))}
      </div> */}
    </main>
  )
}
