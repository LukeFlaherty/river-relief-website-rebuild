import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="bg-brand-tan relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-28 sm:py-36">
        <p className="text-brand-blue mb-4 text-sm font-semibold tracking-widest uppercase">
          {siteConfig.orgName}
        </p>
        <h1 className="text-brand-grey-dark max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          {hero.heading}
        </h1>
        <p className="text-brand-grey-mid mt-6 max-w-xl text-lg leading-8">
          {hero.subheading}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="bg-brand-blue hover:bg-brand-blue/90 rounded-full px-6 py-3 text-base font-semibold text-white transition-colors"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="border-brand-grey-light text-brand-grey-dark hover:border-brand-blue rounded-full border px-6 py-3 text-base font-semibold transition-colors hover:bg-white"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
