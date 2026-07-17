import { siteConfig } from "@/lib/site-config";

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Our Programs
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {siteConfig.programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {program.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
