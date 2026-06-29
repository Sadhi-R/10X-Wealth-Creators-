import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { contactChannelIcons } from "../components/ui/ContactIcons";
import { enrollPath, contact, mobileAppUrl, pageMeta } from "../data/siteContent";
import { usePageMeta } from "../hooks/usePageMeta";

const contactChannels = [
  {
    label: "Enrollment Plans",
    href: enrollPath,
    value: "Silver, Gold & Diamond",
    description: "Choose a plan and enroll securely through our payment links",
    external: false,
    icon: "classplus",
  },
  {
    label: "Mobile App",
    href: mobileAppUrl,
    value: "10X Wealth Creators",
    description: "Download our Android app on Google Play — learn on the go",
    external: true,
    icon: "mobileApp",
  },
  {
    label: "WhatsApp Group",
    href: contact.whatsappGroup,
    value: "Join our community",
    description: "Connect with members and get quick updates",
    external: true,
    icon: "whatsapp",
  },
  {
    label: "Phone / WhatsApp",
    href: contact.phoneHref,
    value: contact.phone,
    description: "Primary contact — call or message us directly",
    external: false,
    icon: "phone",
  },
  {
    label: "Alternate Phone",
    href: contact.phoneAltHref,
    value: contact.phoneAlt,
    description: "Secondary contact number",
    external: false,
    icon: "phone",
  },
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    value: contact.email,
    description: "For detailed inquiries and program questions",
    external: false,
    icon: "email",
  },
  {
    label: "Office Address",
    href: "https://maps.google.com/?q=Kushaiguda+ECIL+Hyderabad+500062",
    value: "Hyderabad, Telangana",
    description: `${contact.address.line1}, ${contact.address.line2}`,
    external: true,
    icon: "location",
  },
  {
    label: "Instagram",
    href: contact.social.instagram,
    value: "@10xwealthcreators",
    description: "Daily inspiration and updates",
    external: true,
    icon: "instagram",
  },
  {
    label: "YouTube",
    href: contact.social.youtube,
    value: "@10XWealthCreators",
    description: "Video content and teachings",
    external: true,
    icon: "youtube",
  },
  {
    label: "X (Twitter)",
    href: contact.social.x,
    value: "@10XWC",
    description: "News and community highlights",
    external: true,
    icon: "x",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  usePageMeta(pageMeta.contact);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Not sure where to start? Let's talk."
        description="Whether you're exploring our framework, joining the community, or ready for membership — we're here to help you find the right path."
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
          eyebrow="Contact Channels"
          title="Choose how you'd like to connect"
          description="Our team responds through the channels you're most comfortable with."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactChannels.map((channel) => {
            const Icon = contactChannelIcons[channel.icon];
            const className =
              "card card-hover flex flex-col p-6 sm:p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

            const content = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-primary">
                  <Icon />
                </span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  {channel.label}
                </p>
                <p className="mt-2 text-base font-semibold text-text contact-break sm:text-lg">{channel.value}</p>
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

        <div className="card mt-16 p-8 sm:p-12">
          <SectionHeader
            eyebrow="Office Location"
            title="Visit us in Hyderabad"
            description="ECIL — Hyderabad, Medchal Malkajgiri, Telangana 500062"
          />
          <address className="mt-8 space-y-2 text-base not-italic leading-relaxed text-text-muted">
            <p>{contact.address.line1}</p>
            <p>{contact.address.line2}</p>
            <p>{contact.address.city}</p>
            <p className="pt-4">
              <a href={contact.phoneHref} className="font-semibold text-primary hover:text-primary-hover">
                {contact.phone}
              </a>
              {" · "}
              <a href={contact.phoneAltHref} className="font-semibold text-primary hover:text-primary-hover">
                {contact.phoneAlt}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="font-semibold text-primary hover:text-primary-hover"
              >
                {contact.email}
              </a>
            </p>
          </address>
        </div>

        <form onSubmit={handleSubmit} className="card mt-12 p-8 sm:p-12" noValidate>
          <SectionHeader
            eyebrow="Message Form"
            title="Send us a message"
            description="Fill out the form below and we'll get back to you. Note: this form is not yet connected to a backend — use the channels above for immediate contact."
          />

          {submitted && (
            <p
              className="mt-8 rounded-xl border border-primary/30 bg-accent-soft p-5 text-base text-text-muted"
              role="status"
            >
              Thank you — this form is not connected to a backend yet. Please use one of
              the contact channels above to reach us directly.
            </p>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-text">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="input-field mt-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-text">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-field mt-2"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-semibold text-text">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="input-field mt-2"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <Button type="submit" size="lg" className="mt-8">
            Send Message
          </Button>
        </form>
      </section>
    </>
  );
}
