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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="kurt text-4xl font-black">Jakarta Stories</h1>
      <Button variant={"secondary"} size={"lg"} className="mt-4">
        Sample Button
      </Button>
      <div>
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
      </div>
    </main>
  )
}
