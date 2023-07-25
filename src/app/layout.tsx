
import Header from "@/components/header"
import Footer from "@/components/footer"
import '@/styles/styles.css'
import HeroSection from "@/components/hero-setion"

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <div className="flex flex-col h-screen justify-between">
          <header className=""><Header /></header>
        
          <main className="mb-auto container mx-auto">{children}</main>
          <footer className=""><Footer /></footer>
        </div>
      </body>
    </html>
  )
}
