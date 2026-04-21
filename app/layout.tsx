import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Mooj Algoat | AI Engineer Portfolio',
  description: 'AI Engineer with expertise in Machine Learning, Deep Learning, NLP, and Computer Vision. First Class Honors graduate passionate about solving real-world problems with AI.',
  keywords: ['AI Engineer', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Python', 'TensorFlow', 'PyTorch'],
  authors: [{ name: 'Mooj Algoat' }],
  openGraph: {
    title: 'Mooj Algoat | AI Engineer Portfolio',
    description: 'AI Engineer with expertise in Machine Learning, Deep Learning, NLP, and Computer Vision.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#e1bcc0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
