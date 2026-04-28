/**
 * ProjectStructureBlock Component
 *
 * Renders a project's file/folder tree in a dark terminal-styled code block.
 */

type ProjectStructureBlockProps = {
  structure: string
}

export function ProjectStructureBlock({ structure }: ProjectStructureBlockProps) {
  return (
    <div className="rounded-xl border border-border/50 overflow-hidden bg-[#0d1117] text-[#e6edf3]">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-white/40 font-mono ml-2">
          project structure
        </span>
      </div>

      {/* Tree Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed text-[#8b949e] whitespace-pre">
          {structure}
        </pre>
      </div>
    </div>
  )
}
