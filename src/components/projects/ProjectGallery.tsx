/**
 * Project Gallery Component (Client)
 *
 * An interactive image gallery for the project hero section.
 * Displays a main preview image with a thumbnail strip for navigation.
 *
 * Responsibilities:
 * - Manage active image state (client-side interactivity)
 * - Render thumbnail strip with active indicator
 * - Support keyboard navigation (ArrowLeft/ArrowRight)
 * - Provide smooth transitions between images
 * - Responsive layout: horizontal thumbnails on all sizes
 *
 * Notes:
 * - This is a Client Component because it manages interactive state.
 * - Uses Next.js Image for optimized loading.
 */

"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

type ProjectGalleryProps = {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + images.length) % images.length)
    },
    [images.length]
  )

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  return (
    <div
      className="flex flex-col gap-3"
      role="region"
      aria-label={`${title} project gallery`}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") goNext()
        if (e.key === "ArrowLeft") goPrev()
      }}
      tabIndex={0}
    >
      {/* Main Image */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/50 bg-muted group">
        <Image
          src={images[activeIndex]}
          alt={`${title} — preview ${activeIndex + 1} of ${images.length}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
          className="object-cover transition-transform duration-500"
          priority={activeIndex === 0}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-background/80 backdrop-blur-sm border border-border/50 text-xs font-medium text-muted-foreground">
            {activeIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all duration-200",
                index === activeIndex
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border/50 opacity-60 hover:opacity-100"
              )}
              aria-label={`View image ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
