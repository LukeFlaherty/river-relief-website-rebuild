import { siteConfig } from "@/lib/site-config";

export function GetInvolvedSection() {
  const { getInvolved } = siteConfig;

  return (
    <section id="get-involved" className="bg-teal-600 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {getInvolved.heading}
          </h2>
          <p className="mt-6 text-lg leading-8 text-teal-50">
            {getInvolved.body}
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {getInvolved.actions.map((action) => (
            <div
              key={action.title}
              className="flex flex-col rounded-2xl bg-white p-8 dark:bg-slate-950"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {action.title}
              </h3>
              <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">
                {action.description}
              </p>
              <a
                href={action.cta.href}
                className="mt-6 inline-block rounded-full bg-teal-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-700"
              >
                {action.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
