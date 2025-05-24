'use client'

import { useEffect, useRef, useState } from "react"

const terminalLines: string[] = [
  "Welcome to my portfolio!",
  "> npm install @mitradev/portfolio",
  "> npm start",
  "Starting the development server...",
  "Compiled successfully!",
  "> Let's build something amazing together.",
  "> How can I help you? You can ask me anything.",
]

const Terminal: React.FC = () => {
  const [question, setQuestion] = useState<string>("")
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const terminalEndRef = useRef<HTMLDivElement>(null)
  const typingSpeed = 500

  useEffect(() => {
    setVisibleLines([])
    const timeouts: NodeJS.Timeout[] = []

    terminalLines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line])
      }, index * typingSpeed)
      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && question.trim()) {
      setVisibleLines((prev) => [...prev, `> ${question}`])
      setQuestion("")
    }
  }

  return (
    <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-lg h-full text-white font-mono">
      {/* Terminal header */}
      <div className="flex items-center space-x-2 p-3 border-b border-gray-700">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Terminal content */}
      <div className="p-4 h-[25vh] overflow-y-auto text-sm leading-relaxed">
        {visibleLines.map((line, index) => (
          <p key={index} className="text-gray-300">
            {line}
          </p>
        ))}

        {/* Input line */}
        <div className="flex items-center">
          <span className="text-gray-300 mr-1">&gt;</span>
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            onKeyDown={handleKeyPress}
            className="w-full bg-transparent text-gray-100 focus:outline-none"
            placeholder="Ask me anything..."
            aria-label="Terminal input"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  )
}

export default Terminal
