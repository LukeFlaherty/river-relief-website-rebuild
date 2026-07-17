import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          {siteConfig.orgName}
        </Link>
        <nav className="hidden gap-8 sm:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={siteConfig.hero.primaryCta.href}
          className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
        >
          {siteConfig.hero.primaryCta.label}
        </a>
      </div>
    </header>
  );
}
