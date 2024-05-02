import type { Metadata } from "next"
// import { Lexend_Deca } from "next/font/google";
import { Montserrat as FontSans } from "next/font/google"
import { cn } from "~/lib/utils"
import "./globals.css"
import { Footer } from "./_components/footer"
import { Nav } from "./_components/nav"

const fontSans = FontSans({
  subsets: ["latin-ext"],
  variable: "--font-sans",
  style: "normal",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Jakarta Stories",
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
          "min-h-screen bg-background font-sans antialiased",
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
