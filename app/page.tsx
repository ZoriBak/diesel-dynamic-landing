
'use client'
import Hero from '../components/Hero'
import DieselAI from '../components/DieselAI'
import WebcamChaos from '../components/WebcamChaos'
import Distortion from '../components/Distortion'

export default function Page() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Distortion />
      <Hero />
      <DieselAI />
      <WebcamChaos />
    </main>
  )
}
