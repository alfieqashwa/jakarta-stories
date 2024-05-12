import { Heart } from "lucide-react"

export const Copyright = () => (
  <div className="flex h-8 items-center justify-center text-pretty bg-gradient-to-t from-white to-foreground bg-clip-text text-xs font-medium tracking-widest text-transparent text-zinc-400">
    <p className="whitespace-nowrap">
      © {new Date().getFullYear()} Made with{" "}
    </p>
    <Heart
      className="mx-1.5 animate-pulse fill-rose-600 text-rose-600"
      size={14}
    />
    <span>by</span>
    <a
      className="ml-1.5 whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
      href="https://github.com/alfieqashwa"
      target="_blank"
      rel="noopener noreferrer"
    >
      Alfie Qashwa
    </a>
  </div>
)
