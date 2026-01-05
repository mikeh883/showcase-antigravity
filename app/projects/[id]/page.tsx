import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Sparkles, Rocket, Activity, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // For projects with dedicated deep dive pages, redirect to them
  if (project.id === "velocity-easycomm" || project.id === "productintel-agents") {
    redirect(`/projects/${project.id}/deep-dive`);
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.tier === project.tier)
    .slice(0, 2);

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 grid-background-dark dark:opacity-40 -z-10 pointer-events-none" />

      <div className="fixed inset-0 grid-background-dark dark:opacity-40 -z-10 pointer-events-none" />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-balance">{project.name}</h1>
            <p className="text-2xl text-primary font-medium">{project.tagline}</p>
          </div>

          <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl">
            {project.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl glass-card">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-blue-500" />
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
              <div className="text-3xl font-bold">{project.linesOfCode.toLocaleString()}</div>
            </div>
            <div className="p-5 rounded-xl glass-card">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                <div className="text-sm text-muted-foreground">Features</div>
              </div>
              <div className="text-3xl font-bold">{project.features}+</div>
            </div>
            <div className="p-5 rounded-xl glass-card">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-purple-500" />
                <div className="text-sm text-muted-foreground">Innovations</div>
              </div>
              <div className="text-3xl font-bold">{project.keyInnovations.length}</div>
            </div>
            <div className="p-5 rounded-xl glass-card">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-yellow-500" />
                <div className="text-sm text-muted-foreground">Maturity</div>
              </div>
              <div className="text-3xl font-bold">{project.maturityRating}/10</div>
            </div>
          </div>

          {project.demoUrl && (
            <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-green-600 dark:text-green-400">Live Concept Site</h3>
                  <p className="text-muted-foreground text-sm">Experience the working prototype</p>
                </div>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white hover:bg-green-500 rounded-lg font-semibold transition-all shadow-lg shadow-green-900/20"
                >
                  Launch Concept Site
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold mb-8">Key Innovations</h2>
          <div className="space-y-4">
            {project.keyInnovations.map((innovation, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl glass-card hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-base font-bold text-primary">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-foreground/90">{innovation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Project Status</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl glass-card">
              <h3 className="text-lg font-semibold mb-3 text-primary">Current Status</h3>
              <p className="text-2xl font-bold capitalize mb-2">{project.status.replace("-", " ")}</p>
              <p className="text-base text-muted-foreground">
                {project.status === "functional-demo" && "Fully functional with live AI integration and data persistence"}
                {project.status === "working-prototype" && "Real workflows implemented, demonstrating core concepts"}
                {project.status === "concept-validation" && "Proof of concept with essential features functional"}
                {project.status === "roadmap" && "Planned future development combining multiple approaches"}
              </p>
            </div>
            <div className="p-6 rounded-xl glass-card">
              <h3 className="text-lg font-semibold mb-3 text-cyan-500">Functional Completeness</h3>
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold">{project.maturityRating}/10</div>
                <div className="flex-1">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      style={{ width: `${project.maturityRating * 10}%` }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-base text-muted-foreground mt-3">
                {project.maturityRating >= 8 && "Highly functional with sophisticated features implemented"}
                {project.maturityRating >= 6 && project.maturityRating < 8 && "Core features complete, room for enhancement"}
                {project.maturityRating < 6 && "Essential functionality working, demonstrating key concepts"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="container mx-auto px-6 py-12 pb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group p-6 rounded-xl glass-card hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {relatedProject.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{relatedProject.tagline}</p>
                  <div className="flex items-center gap-4 text-sm text-foreground/60">
                    <span>{(relatedProject.linesOfCode / 1000).toFixed(0)}K LOC</span>
                    <span>•</span>
                    <span>{relatedProject.features} features</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-semibold">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
