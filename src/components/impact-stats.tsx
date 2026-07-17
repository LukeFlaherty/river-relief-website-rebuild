import { siteConfig } from "@/lib/site-config";

export function ImpactStats() {
  return (
    <section id="impact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Our Impact
      </h2>
      <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {siteConfig.impact.map((item) => (
          <div key={item.label}>
            <dt className="text-3xl font-bold text-teal-600 sm:text-4xl dark:text-teal-400">
              {item.stat}
            </dt>
            <dd className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
