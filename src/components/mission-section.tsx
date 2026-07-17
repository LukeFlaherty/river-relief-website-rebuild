import { siteConfig } from "@/lib/site-config";

export function MissionSection() {
  const { mission } = siteConfig;

  return (
    <section id="mission" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {mission.heading}
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {mission.body}
        </p>
      </div>
    </section>
  );
}
