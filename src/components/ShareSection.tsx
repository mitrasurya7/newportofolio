'use client'

import { FaTwitter, FaWhatsapp, FaCopy } from "react-icons/fa"
import { useState } from "react"

export default function ShareSection({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const shareUrl = `https://mitradev.my.id/blogs/${slug}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Share Article:</h3>
      <div className="flex gap-4 items-center">
        <a
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
        >
          <FaTwitter /> Twitter
        </a>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
        >
          <FaCopy /> {copied ? 'Tersalin!' : 'Salin Link'}
        </button>
      </div>
    </div>
  )
}
