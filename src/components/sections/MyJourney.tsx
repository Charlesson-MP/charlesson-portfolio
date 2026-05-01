"use client"

import WalkingCharacter from "@/components/ui/WalkingCharacter";
import { useTranslation } from "@/hooks/use-translation";

export function MyJourney() {
  const t = useTranslation()
  return (
    <section className="flex flex-col items-center justify-center py-36">
      {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            {t.myJourney.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.myJourney.subtitle}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            {t.myJourney.description}
          </p>
        </div>


      {/* <WalkingCharacter
        frame1="/myjourney/character/frame1.png"
        frame2="/myjourney/character/frame2.png"
        height={120}
        interval={300}
        direction="right"
      /> */}
    </section>
  );
}