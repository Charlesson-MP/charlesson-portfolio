/**
 * Project Type Definition
 *
 * Defines the structure for a single project entry in the portfolio.
 * This interface is used to maintain consistency across all project data.
 *
 * Properties:
 * - title: The display name of the project.
 * - description: A brief summary of the project's purpose and functionality.
 * - tech: An array of strings listing the technologies and tools used in the project.
 * - liveUrl: The URL to access the live, deployed version of the project.
 * - githubUrl: The URL to the project's source code repository on GitHub.
 *
 * Usage:
 * const project: Project = {
 *   title: "My Awesome App",
 *   description: "A full-stack application that...",
 *   tech: ["React", "Node.js", "PostgreSQL"],
 *   liveUrl: "https://example.com",
 *   githubUrl: "https://github.com/user/repo"
 * };
 */

export type Project = {
  title: string
  image: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
}