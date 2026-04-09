/**
 * Home page of the portfolio.
 *
 * Responsibilities:
 * - Compose all main sections of the landing page
 * - Define the visual flow of the application
 *
 * Each section should be implemented as a separate component
 * to ensure modularity and maintainability.
 */

import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 p-10">
      <Hero />
    </main>
  );
}
