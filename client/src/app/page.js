import Image from 'next/image'
import Hero from '@/components/hero'
import Feature from '@/components/features'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black">
      <Hero />
      <Feature />
    </main>
  )
}
