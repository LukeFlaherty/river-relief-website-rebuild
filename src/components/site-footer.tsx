import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socialLinks = Object.entries(siteConfig.social).filter(
    ([, url]) => url,
  );

  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {year} {siteConfig.orgName}. All rights reserved.
        </p>
        {socialLinks.length > 0 && (
          <div className="flex gap-6">
            {socialLinks.map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                className="text-sm text-slate-500 capitalize hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
