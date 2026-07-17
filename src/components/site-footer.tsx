import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socialLinks = Object.entries(siteConfig.social).filter(
    ([, url]) => url,
  );

  return (
    <footer className="bg-brand-blue py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Image
            src="/brand/logo-white.png"
            alt={siteConfig.orgName}
            width={160}
            height={40}
            className="h-8 w-auto"
          />
          {socialLinks.length > 0 && (
            <div className="flex gap-6">
              {socialLinks.map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="text-brand-tan text-sm capitalize hover:text-white"
                >
                  {platform}
                </a>
              ))}
            </div>
          )}
        </div>
        <p className="text-brand-grey-light mt-8 text-xs leading-relaxed">
          {siteConfig.legal.disclosure}
        </p>
        <p className="text-brand-grey-light mt-4 text-xs">
          &copy; {year} {siteConfig.orgName} LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
