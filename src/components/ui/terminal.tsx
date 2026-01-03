'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

interface TerminalProps {
  autoType?: boolean
  initialCommands?: string[]
  className?: string
}

interface CommandOutput {
  command: string
  output: React.ReactNode
}

const COMMANDS: Record<string, () => React.ReactNode> = {
  whoami: () => (
    <div className="text-primary-light">
      Felipe Orellana — Full Stack Developer
    </div>
  ),
  
  'cat skills.txt': () => (
    <div className="text-terminal-text space-y-1">
      <div className="text-primary-light">├── Languages:</div>
      <div className="pl-4 text-neutral-gray-text">Python, TypeScript, SQL, Bash</div>
      <div className="text-primary-light">├── Backend:</div>
      <div className="pl-4 text-neutral-gray-text">Django, FastAPI, Node.js</div>
      <div className="text-primary-light">├── Frontend:</div>
      <div className="pl-4 text-neutral-gray-text">React, Next.js, TailwindCSS, Vite</div>
      <div className="text-primary-light">├── DevOps:</div>
      <div className="pl-4 text-neutral-gray-text">Docker, Nginx, Vercel, Cloudflare</div>
      <div className="text-primary-light">└── Data:</div>
      <div className="pl-4 text-neutral-gray-text">PostgreSQL, MySQL, Pandas</div>
    </div>
  ),
  
  './status.sh': () => (
    <div className="space-y-1">
      <div><span className="text-yellow-400">🎓</span> Graduating: <span className="text-primary-light">2026</span></div>
      <div><span className="text-blue-400">📍</span> Location: <span className="text-primary-light">Chile</span></div>
      <div><span className="text-green-400">💼</span> Status: <span className="text-green-400">Open to opportunities</span></div>
    </div>
  ),
  
  'ls projects/': () => (
    <div className="text-terminal-text space-y-1">
      <div className="text-primary-light">drwxr-xr-x</div>
      <div className="pl-4">├── estetikflow/</div>
      <div className="pl-4">├── angel-code-soluciones/</div>
      <div className="pl-4">├── retorno-seguro-chile/</div>
      <div className="pl-4">├── dara-gestor-documental/</div>
      <div className="pl-4">├── podoclinic/</div>
      <div className="pl-4">└── minimarket-don-ale/</div>
    </div>
  ),
  
  'cat contact.json': () => (
    <pre className="text-terminal-text text-sm">
{`{
  "email": "contacto@felipeorellana.dev",
  "linkedin": "/in/felipe-orellana-álvarez",
  "github": "/Xamppy"
}`}
    </pre>
  ),
  
  neofetch: () => (
    <div className="text-terminal-text">
      <pre className="text-primary-light text-xs leading-tight">
{`        .--.        `}<span className="text-neutral-white">felipe@portfolio</span>{`
       |o_o |       `}<span className="text-neutral-gray-text">-----------------</span>{`
       |:_/ |       `}<span className="text-primary-light">OS:</span>{` Win11 / EndeavourOS`}{`
      //   \\ \\      `}<span className="text-primary-light">Shell:</span>{` pwsh / zsh`}{`
     (|     | )     `}<span className="text-primary-light">Editor:</span>{` VS Code + Neovim`}{`
    /'\\_   _/\`\\    `}<span className="text-primary-light">Stack:</span>{` React + Django`}{`
    \\___)=(___/    `}<span className="text-primary-light">Coffee:</span>{` ∞ cups/day`}
      </pre>
    </div>
  ),
  
  'sudo hire felipe': () => (
    <div className="space-y-2">
      <div className="text-green-400">[sudo] Excellent choice! 🎉</div>
      <div className="text-terminal-text">Redirecting to contact section...</div>
      <div className="text-primary-light animate-pulse">✓ Application received</div>
    </div>
  ),
  
  help: () => (
    <div className="text-terminal-text space-y-1">
      <div className="text-primary-light mb-2">Available commands:</div>
      <div><span className="text-yellow-400">whoami</span> - Display developer info</div>
      <div><span className="text-yellow-400">cat skills.txt</span> - List technical skills</div>
      <div><span className="text-yellow-400">./status.sh</span> - Current status</div>
      <div><span className="text-yellow-400">ls projects/</span> - List projects</div>
      <div><span className="text-yellow-400">cat contact.json</span> - Contact information</div>
      <div><span className="text-yellow-400">neofetch</span> - System info (Easter egg)</div>
      <div><span className="text-yellow-400">sudo hire felipe</span> - 😉</div>
      <div><span className="text-yellow-400">clear</span> - Clear terminal</div>
    </div>
  ),
  
  vim: () => (
    <div className="text-primary-light">I use Neovim btw 😎</div>
  ),
  
  'apt install job': () => (
    <div className="text-yellow-400">Use `sudo hire felipe` instead 😉</div>
  ),
  
  'rm -rf /': () => (
    <div className="text-red-400">Nice try 😏 Permission denied.</div>
  ),
}

export function Terminal({ autoType = true, initialCommands = ['whoami'], className }: TerminalProps) {
  const [history, setHistory] = useState<CommandOutput[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [inputMode, setInputMode] = useState<'command' | 'password'>('command')
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const hasAutoTyped = useRef(false)

  // Secret Easter Egg ASCII Art
  const HEART_ART = `
     ****     ****
   **    ** **    **
  **      ***      **
  **               **
   **             **
    **           **
      **       **
        **   **
          ***
           *`

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Execute command
  const executeCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    // Handle password mode for Easter Egg
    if (inputMode === 'password') {
      if (cmd.trim() === '250724') {
        setHistory(prev => [...prev, { 
          command: '********', 
          output: (
            <div className="space-y-2">
              <pre className="text-pink-500 whitespace-pre font-mono text-xs leading-tight">{HEART_ART}</pre>
              <div className="text-pink-400 font-medium mt-4">
                Constanza Javiera De La Fuente Roa, eres el amor de mi alma 💕
              </div>
            </div>
          )
        }])
      } else {
        setHistory(prev => [...prev, { 
          command: '********', 
          output: <div className="text-red-400">Acceso denegado.</div>
        }])
      }
      setInputMode('command')
      return
    }
    
    // Secret trigger - not in help
    if (trimmedCmd === 'miñimi') {
      setHistory(prev => [...prev, { 
        command: cmd, 
        output: <div className="text-pink-400">🔒 Ingrese contraseña:</div>
      }])
      setInputMode('password')
      return
    }
    
    if (trimmedCmd === 'clear') {
      setHistory([])
      return
    }

    if (trimmedCmd === 'sudo hire felipe') {
      // Scroll to contact after animation
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        contactSection?.scrollIntoView({ behavior: 'smooth' })
      }, 1500)
    }

    const output = COMMANDS[trimmedCmd]?.() || (
      <div className="text-red-400">
        Command not found: {cmd}. Type <span className="text-yellow-400">help</span> for available commands.
      </div>
    )

    setHistory(prev => [...prev, { command: cmd, output }])
  }, [inputMode, HEART_ART])

  // Auto-type effect for initial commands
  useEffect(() => {
    if (!autoType || hasAutoTyped.current || initialCommands.length === 0) return
    hasAutoTyped.current = true

    const typeCommand = async (command: string) => {
      setIsTyping(true)
      for (let i = 0; i <= command.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 30))
        setCurrentInput(command.slice(0, i))
      }
      await new Promise(resolve => setTimeout(resolve, 300))
      executeCommand(command)
      setCurrentInput('')
      setIsTyping(false)
    }

    const runSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 800))
      for (const cmd of initialCommands) {
        await typeCommand(cmd)
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    }

    runSequence()
  }, [autoType, initialCommands, executeCommand])

  // Handle user input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentInput.trim() && !isTyping) {
      executeCommand(currentInput)
      setCurrentInput('')
    }
  }

  // Focus input on terminal click
  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`relative ${className}`}
    >
      {/* Terminal Window */}
      <div 
        className="bg-terminal-bg border border-terminal-border rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm"
        onClick={handleTerminalClick}
      >
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-neutral-gray-dark/50 border-b border-terminal-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-neutral-gray-text font-mono ml-2">
            felipe@portfolio ~ 
          </span>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="p-4 h-72 overflow-y-auto font-mono text-sm scrollbar-thin"
        >
          {/* History */}
          {history.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="flex items-center gap-2">
                <span className="text-terminal-prompt">$</span>
                <span className="text-terminal-text">{item.command}</span>
              </div>
              <div className="mt-1 pl-4">
                {item.output}
              </div>
            </div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center gap-2">
            <span className="text-terminal-prompt">
              {inputMode === 'password' ? '🔐' : '$'}
            </span>
            <div className="flex-1 relative">
              <span className="text-terminal-text">{currentInput}</span>
              <span 
                className={`inline-block w-2 h-5 bg-terminal-cursor ml-0.5 align-middle transition-opacity ${
                  cursorVisible && !isTyping ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <input
                ref={inputRef}
                type={inputMode === 'password' ? 'password' : 'text'}
                value={currentInput}
                onChange={(e) => !isTyping && setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 opacity-0 cursor-text"
                disabled={isTyping}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </div>

        {/* Command Suggestions (Mobile) */}
        <div className="md:hidden flex flex-wrap gap-2 p-3 border-t border-terminal-border bg-neutral-gray-dark/30">
          {['whoami', 'cat skills.txt', './status.sh', 'help'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                if (!isTyping) {
                  executeCommand(cmd)
                }
              }}
              className="px-3 py-1.5 text-xs font-mono bg-primary-DEFAULT/10 text-primary-light border border-primary-DEFAULT/30 rounded-lg hover:bg-primary-DEFAULT/20 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
