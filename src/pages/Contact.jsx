import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { contactChannelIcons } from "../components/ui/ContactIcons";
import { enrollPath, contact, mobileAppUrl, pageMeta } from "../data/siteContent";
import { usePageMeta } from "../hooks/usePageMeta";

const contactChannels = [
  {
    label: "Membership Plans",
    href: enrollPath,
    value: "Silver, Gold & Diamond",
    description: "Choose a plan and enroll securely",
    external: false,
    icon: "classplus",
  },
  {
    label: "Mobile App",
    href: mobileAppUrl,
    value: "10X Wealth Creators",
    description: "Android app for learning on the go",
    external: true,
    icon: "mobileApp",
  },
  {
    label: "WhatsApp Group",
    href: contact.whatsappGroup,
    value: "Join our community",
    description: "Connect with members and get updates",
    external: true,
    icon: "whatsapp",
  },
  {
    label: "Phone / WhatsApp",
    href: contact.phoneHref,
    value: contact.phone,
    description: "Call or message us directly",
    external: false,
    icon: "phone",
  },
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    value: contact.email,
    description: "For detailed program questions",
    external: false,
    icon: "email",
  },
  {
    label: "Office",
    href: "https://maps.google.com/?q=Kushaiguda+ECIL+Hyderabad+500062",
    value: "Hyderabad, Telangana",
    description: `${contact.address.line1}, ${contact.address.line2}`,
    external: true,
    icon: "location",
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
        eyebrow="Get in Touch"
        title="Not sure where to start? Let's talk."
        description="Exploring the framework, joining community, or ready for membership — we'll help you find the right path."
      >
        <div className="mt-8 cta-group">
          <Button href={contact.phoneHref} size="lg">
            Book a Free Call
          </Button>
          <Button href={contact.whatsappGroup} variant="secondary" size="lg">
            Join WhatsApp Community
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Ways to Connect"
          title="Choose what works for you"
          description="Our team responds through the channels you're most comfortable with."
          className="mb-10"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactChannels.map((channel) => {
            const Icon = contactChannelIcons[channel.icon];
            const className =
              "card card-hover flex flex-col p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
            const content = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-primary">
                  <Icon />
                </span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  {channel.label}
                </p>
                <p className="mt-2 text-base font-semibold text-text contact-break">
                  {channel.value}
                </p>
                <p className="mt-2 text-sm text-text-muted">{channel.description}</p>
              </>
            );

            if (channel.external) {
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              );
            }

            if (channel.href.startsWith("/")) {
              return (
                <Link key={channel.label} to={channel.href} className={className}>
                  {content}
                </Link>
              );
            }

            return (
              <a key={channel.label} href={channel.href} className={className}>
                {content}
              </a>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="card mt-12 p-8 sm:p-10" noValidate>
          <SectionHeader
            eyebrow="Message"
            title="Send us a note"
            description="Opens your email app with your message — no backend required."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-text">
                Full Name
              </label>
              <input id="name" name="name" type="text" required className="input-field mt-2" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-text">
                Email
              </label>
              <input id="email" name="email" type="email" required className="input-field mt-2" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-semibold text-text">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="input-field mt-2"
              placeholder="Tell us how we can help..."
            />
          </div>
          <Button type="submit" size="lg" className="mt-7">
            Open Email to Send
          </Button>
        </form>
      </section>
    </>
  );
}
