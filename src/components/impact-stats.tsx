import { siteConfig } from "@/lib/site-config";

export function ImpactStats() {
  const { impact } = siteConfig;

  return (
    <section id="impact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-brand-grey-dark text-3xl font-bold tracking-tight sm:text-4xl">
        {impact.heading}
      </h2>
      <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {impact.items.map((item) => (
          <div key={item.label}>
            <dt className="text-brand-blue text-3xl font-bold sm:text-4xl">
              {item.stat}
            </dt>
            <dd className="text-brand-grey-mid mt-2 text-sm">{item.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
