import type { Metadata } from "next"
// import { Lexend_Deca } from "next/font/google";
import { Lexend_Deca as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "~/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
        {children}
      </body>
    </html>
  )
}
