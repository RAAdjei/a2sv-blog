import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raph Blog',
  description: 'Created by Raph',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <ProfilePic/>
        {children}
        </body>
    </html>
  )
}
