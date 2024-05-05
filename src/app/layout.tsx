import type { Metadata } from "next"
// import { Lexend_Deca } from "next/font/google";
import { Montserrat as FontSans } from "next/font/google"
import { cn } from "~/lib/utils"
import "./globals.css"
import { Footer } from "~/components/footer"
import { Nav } from "~/components/nav"

const fontSans = FontSans({
  subsets: ["latin-ext"],
  variable: "--font-sans",
  style: "normal",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Jkt Stories",
    default: "Jakarta Stories",
  },
  robots: {
    follow: true,
    index: true,
  },
  description: "Jakarta Stories Description",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head />
      <body
        className={cn(
          "min-h-screen min-w-[360px] bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
