import { siteConfig } from "@/lib/site-config";

export function ProgramsSection() {
  const { programs } = siteConfig;

  return (
    <section id="how-it-works" className="bg-brand-tan/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-brand-grey-dark text-3xl font-bold tracking-tight sm:text-4xl">
          {programs.heading}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {programs.items.map((program, index) => (
            <div
              key={program.title}
              className="border-brand-grey-light/30 rounded-2xl border bg-white p-8"
            >
              <div className="bg-brand-blue mb-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="text-brand-grey-dark text-xl font-semibold">
                {program.title}
              </h3>
              <p className="text-brand-grey-mid mt-3">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
