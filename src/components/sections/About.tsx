/**
 * About Section
 *
 * Presents a concise overview of the developer’s background, experience, and professional focus.
 * This section communicates the transition into frontend development, highlighting both technical
 * skills and user-centered thinking.
 *
 * Responsibilities:
 * - Display a brief professional narrative (background and transition into tech)
 * - Highlight key strengths such as problem-solving, attention to detail, and UX awareness
 * - Reinforce experience with real projects and modern development practices
 *
 * Content Strategy:
 * - Structured in short, readable paragraphs for better scanning
 * - Focuses on clarity and authenticity, avoiding overly generic statements
 * - Balances technical skills with design and user experience perspective
 *
 * Behavior:
 * - Static content (no dynamic state or interactivity)
 * - Acts as an anchor target for navigation (id="sobre")
 *
 * Layout:
 * - Centered container with controlled max-width for readability
 * - Vertical spacing optimized for comfortable reading
 *
 * Notes:
 * - Designed to support scroll-based navigation (scroll spy)
 * - Content can be easily adapted for i18n in future iterations
 */

export function About() {
  return (
    <section id="sobre" className="py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            Sobre Mim
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Do suporte técnico ao desenvolvimento frontend
          </h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Minha jornada na tecnologia começou no suporte de TI e design gráfico, onde desenvolvi uma base sólida em resolução de problemas e atenção aos detalhes. Durante minha formação em Ciência da Computação na UESB, aprofundei essas habilidades através de projetos e resolução de problemas aplicados ao desenvolvimento. Essa experiência me ajudou a entender como as pessoas realmente utilizam a tecnologia no dia a dia.
            </p>

            <p>
              A transição para o desenvolvimento frontend surgiu naturalmente, unindo meu interesse por interfaces visuais com programação. Hoje, foco na criação de aplicações modernas, responsivas e com boa experiência do usuário.
            </p>

            <p>
              Já atuei em projetos reais, colaborando com equipes e aplicando boas práticas de desenvolvimento. Busco sempre escrever código limpo, escalável e bem estruturado, acompanhando os padrões do mercado.
            </p>

            <p>
              Meu objetivo é evoluir constantemente como desenvolvedor e contribuir com soluções que gerem impacto real para usuários e negócios.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
