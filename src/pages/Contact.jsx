import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import { contactChannelIcons } from "../components/ui/ContactIcons";
import { contact, pageMeta } from "../data/siteContent";
import { usePageMeta } from "../hooks/usePageMeta";

const channels = [
  {
    label: "Call / WhatsApp",
    href: contact.phoneHref,
    value: contact.phone,
    icon: "phone",
  },
  {
    label: "Community",
    href: contact.whatsappGroup,
    value: "Join WhatsApp group",
    icon: "whatsapp",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    value: contact.email,
    icon: "email",
  },
];

export default function Contact() {
  usePageMeta(pageMeta.contact);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`10X Wealth Creators enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        description="Call, message, or send a note — we'll help you start."
      >
        <div className="mt-8 cta-group">
          <Button href={contact.phoneHref} size="lg">
            Call Now
          </Button>
          <Button href={contact.whatsappGroup} variant="secondary" size="lg">
            WhatsApp
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <div className="grid gap-5 sm:grid-cols-3">
          {channels.map((channel) => {
            const Icon = contactChannelIcons[channel.icon];
            return (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="card card-hover flex flex-col p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-primary">
                  <Icon />
                </span>
                <p className="mt-4 text-sm font-semibold text-primary">{channel.label}</p>
                <p className="mt-1 text-base font-semibold text-text contact-break">{channel.value}</p>
              </a>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="card mt-10 p-6 sm:p-8" noValidate>
          <h2 className="text-xl font-bold text-text">Send a message</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-text">
                Name
              </label>
              <input id="name" name="name" type="text" required className="input-field mt-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-text">
                Email
              </label>
              <input id="email" name="email" type="email" required className="input-field mt-2" />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-semibold text-text">
              Message
            </label>
            <textarea id="message" name="message" rows={4} required className="input-field mt-2" />
          </div>
          <Button type="submit" size="lg" className="mt-6">
            Send
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-text-muted">
          {contact.address.line1}, {contact.address.city}
        </p>
      </section>
    </>
  );
}
