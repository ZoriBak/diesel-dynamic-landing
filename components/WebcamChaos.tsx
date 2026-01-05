
'use client'
import { useEffect, useRef } from 'react'

export default function WebcamChaos() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      if (videoRef.current) videoRef.current.srcObject = stream
    })
  }, [])

  return (
    <section className="p-10">
      <h2 className="text-3xl mb-4">MOVE. BREAK THE FRAME.</h2>
      <video ref={videoRef} autoPlay className="w-64 opacity-60" />
      <p className="mt-2 text-sm">Gesture layer scaffold (MediaPipe-ready)</p>
    </section>
  )
}
