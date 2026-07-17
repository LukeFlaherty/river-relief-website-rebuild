import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white dark:from-slate-900 dark:to-black"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-28 sm:py-36">
        <p className="mb-4 text-sm font-semibold tracking-widest text-teal-700 uppercase dark:text-teal-400">
          {siteConfig.orgName}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          {hero.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          {hero.subheading}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-teal-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-700"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-white dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
