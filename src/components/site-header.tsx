import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="border-brand-grey-light/30 sticky top-0 z-50 border-b bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" aria-label={siteConfig.orgName}>
          <Image
            src="/brand/logo-full-color.png"
            alt={siteConfig.orgName}
            width={160}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <nav className="hidden gap-8 sm:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-brand-grey-mid hover:text-brand-blue text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={siteConfig.hero.primaryCta.href}
          className="bg-brand-blue hover:bg-brand-blue/90 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
        >
          {siteConfig.hero.primaryCta.label}
        </a>
      </div>
    </header>
  );
}
