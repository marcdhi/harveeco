"use client"

import Image from 'next/image'
import Feature from '@/components/features'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black">
      <Hero />
      <Feature />
    </main>
  )
}
