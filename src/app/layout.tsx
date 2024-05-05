import type { Metadata } from "next"
// import { Lexend_Deca } from "next/font/google";
import { Montserrat as FontSans } from "next/font/google"
import { Footer } from "~/components/footer"
import { Nav } from "~/components/nav"
import { ThemeProvider } from "~/components/theme-provider"
import { cn } from "~/lib/utils"
import "./globals.css"

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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body
        className={cn(
          "mx-auto min-h-screen min-w-[360px] max-w-[2048px] bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="container">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
