import { siteConfig } from "@/lib/site-config";

export function MissionSection() {
  const { mission } = siteConfig;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-brand-grey-dark text-3xl font-bold tracking-tight sm:text-4xl">
          {mission.heading}
        </h2>
        <p className="text-brand-grey-mid mt-6 text-lg leading-8">
          {mission.body}
        </p>
      </div>
    </section>
  );
}
