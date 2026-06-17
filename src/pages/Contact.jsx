import { useState } from "react";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";

const contactChannels = [
  {
    label: "WhatsApp Group",
    href: "https://chat.whatsapp.com/Im4AqA2MjsgAK4very2D6L",
    value: "Join our community",
    description: "Connect with members and get quick updates",
    external: true,
    icon: "💬",
  },
  {
    label: "Phone / WhatsApp",
    href: "tel:+919441415563",
    value: "+91 94414 15563",
    description: "Call or message us directly",
    external: false,
    icon: "📞",
  },
  {
    label: "Email",
    href: "mailto:10xwealthcreators@gmail.com",
    value: "10xwealthcreators@gmail.com",
    description: "For detailed inquiries",
    external: false,
    icon: "✉️",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/10xwealthcreators",
    value: "@10xwealthcreators",
    description: "Daily inspiration and updates",
    external: true,
    icon: "📷",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@10XWealthCreators",
    value: "@10XWealthCreators",
    description: "Video content and teachings",
    external: true,
    icon: "▶️",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/10XWC",
    value: "@10XWC",
    description: "News and community highlights",
    external: true,
    icon: "𝕏",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We're here to help you take the next step"
        description="Have questions about our programs, community, or coaching approach? Reach out through any channel below. The contact form is frontend-only for now — no messages are sent yet."
      />

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Contact Channels"
          title="Choose how you'd like to connect"
          description="Our team responds through the channels you're most comfortable with."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="card card-hover flex flex-col p-6 sm:p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="text-3xl" aria-hidden="true">
                {channel.icon}
              </span>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {channel.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-text">{channel.value}</p>
              <p className="mt-2 text-sm text-text-muted">{channel.description}</p>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="card mt-16 p-8 sm:p-12" noValidate>
          <SectionHeader
            eyebrow="Message Form"
            title="Send us a message"
            description="Fill out the form below and we'll get back to you. Note: this form is not yet connected to a backend."
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
