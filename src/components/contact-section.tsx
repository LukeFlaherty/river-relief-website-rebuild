import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {contact.heading}
      </h2>
      <div className="mt-6 space-y-2 text-lg text-slate-600 dark:text-slate-300">
        {contact.email && (
          <p>
            Email:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-teal-600 hover:underline dark:text-teal-400"
            >
              {contact.email}
            </a>
          </p>
        )}
        {contact.phone && <p>Phone: {contact.phone}</p>}
        {contact.address && <p>{contact.address}</p>}
      </div>
    </section>
  );
}
