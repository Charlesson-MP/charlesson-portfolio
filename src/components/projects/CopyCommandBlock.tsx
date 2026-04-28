/**
 * CopyCommandBlock Component
 *
 * Terminal-styled code block with per-command copy-to-clipboard functionality.
 * Used in the "How to Run" section of the project detail page.
 */

"use client"

import { useState, useCallback } from "react"
import { Copy, Check } from "lucide-react"
import type { Command } from "@/types/projects"
import { useLanguage } from "@/hooks/use-language"

type CopyCommandBlockProps = {
  commands: Command[]
}

export function CopyCommandBlock({ commands }: CopyCommandBlockProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const { language } = useLanguage()

  const handleCopy = useCallback(async (command: string, index: number) => {
    try {
      await navigator.clipboard.writeText(command)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch {
      // Clipboard API not available — silent fail
    }
  }, [])

  return (
    <div className="rounded-xl border border-border/50 overflow-hidden bg-[#0d1117] text-[#e6edf3]">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-white/40 font-mono ml-2">terminal</span>
      </div>

      {/* Commands */}
      <div className="divide-y divide-white/5">
        {commands.map((cmd, index) => (
          <div
            key={index}
            className="group flex items-center justify-between gap-4 px-4 py-3 hover:bg-white/5 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-white/40 mb-1 font-sans">
                {cmd.label[language]}
              </p>
              <code className="text-sm font-mono text-[#7ee787] block truncate">
                <span className="text-[#6e7681] select-none">$ </span>
                {cmd.command}
              </code>
            </div>
            <button
              onClick={() => handleCopy(cmd.command, index)}
              className="flex items-center justify-center w-8 h-8 rounded-md text-white/40 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 shrink-0"
              aria-label={`Copy command: ${cmd.command}`}
            >
              {copiedIndex === index ? (
                <Check className="w-4 h-4 text-[#28c840]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
