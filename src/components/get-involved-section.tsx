import { siteConfig } from "@/lib/site-config";

export function GetInvolvedSection() {
  const { getInvolved } = siteConfig;

  return (
    <section id="get-started" className="bg-brand-blue py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {getInvolved.heading}
          </h2>
          <p className="text-brand-tan mt-6 text-lg leading-8">
            {getInvolved.body}
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {getInvolved.actions.map((action) => (
            <div
              key={action.title}
              className="flex flex-col rounded-2xl bg-white p-8"
            >
              <h3 className="text-brand-grey-dark text-xl font-semibold">
                {action.title}
              </h3>
              <p className="text-brand-grey-mid mt-3 flex-1">
                {action.description}
              </p>
              <a
                href={action.cta.href}
                className="bg-brand-blue hover:bg-brand-blue/90 mt-6 inline-block rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors"
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
