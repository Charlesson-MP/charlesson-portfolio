/**
 * Project Not Found Page
 *
 * Custom 404 UI displayed when a user navigates to /projects/[slug]
 * with an invalid or non-existent slug.
 *
 * Responsibilities:
 * - Display a clear "project not found" message
 * - Provide navigation back to the projects listing
 * - Maintain visual consistency with the portfolio design
 *
 * Notes:
 * - Triggered by notFound() in the detail page component.
 * - Rendered within the existing root layout (header, footer).
 */

import Link from "next/link"
import { FolderX } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function ProjectNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <FolderX className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">
          Project Not Found
        </h1>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          The project you&apos;re looking for doesn&apos;t exist or may have been removed.
          Check the URL or go back to browse all projects.
        </p>

        <Button asChild size="lg">
          <Link href="/#projetos">
            View All Projects
          </Link>
        </Button>
      </div>
    </div>
  )
}
