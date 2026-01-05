
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function DieselAI() {
  const [input, setInput] = useState('')
  const [reply, setReply] = useState('')

  async function send() {
    const r = await fetch('/api/diesel-ai', {
      method: 'POST',
      body: JSON.stringify({ message: input })
    })
    const d = await r.json()
    setReply(d.reply)
  }

  return (
    <section className="min-h-screen p-10">
      <h2 className="text-4xl mb-4">TALK TO DIESEL</h2>
      <input
        className="bg-transparent border-b w-full text-2xl"
        onChange={e => setInput(e.target.value)}
        placeholder="Say something real"
      />
      <button onClick={send} className="mt-4 underline">SPILL IT</button>
      {reply && <motion.p className="mt-8 text-3xl">{reply}</motion.p>}
    </section>
  )
}
