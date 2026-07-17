import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-brand-grey-dark text-3xl font-bold tracking-tight sm:text-4xl">
        {contact.heading}
      </h2>
      <div className="text-brand-grey-mid mt-6 space-y-2 text-lg">
        {contact.email && (
          <p>
            Email:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-brand-blue hover:underline"
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
