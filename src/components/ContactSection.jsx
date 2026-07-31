import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 relative bg-ink-raised/40">
      <div className="container mx-auto max-w-5xl">
        <div className="log-divider">
          <span className="mono-tag">Log 04</span>
          <span className="h-px flex-1 bg-line" />
          <span className="mono-tag">Contact</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
          Have a system that needs<span className="text-teal"> building</span>?
        </h2>
        <p className="text-muted mb-14 max-w-2xl text-left">
          Whether it is a payment flow, a data pipeline, or an audit you need
          passed, I am glad to talk it through.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-xl font-semibold">Contact information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-line text-amber">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-0.5">Email</h4>
                  <a
                    href="mailto:lukmanuthman135@gmail.com"
                    className="text-muted hover:text-teal transition-colors"
                  >
                    lukmanuthman135@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 border border-line text-amber">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-0.5">Phone</h4>
                  <a
                    href="tel:+2349032024600"
                    className="text-muted hover:text-teal transition-colors"
                  >
                    +234 903 202 4600
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 border border-line text-amber">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-0.5">Location</h4>
                  <p className="text-muted">Ikeja, Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">Elsewhere</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/abubakr-lukman-uthman-51156"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 border border-line hover:border-teal hover:text-teal transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com/abubakr_Lukman"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 border border-line hover:border-teal hover:text-teal transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.instagram.com/abubakrlukman_"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 border border-line hover:border-teal hover:text-teal transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="panel p-8">
            <h3 className="text-xl font-semibold mb-6 text-left">
              Send a message
            </h3>

            <form
              className="space-y-6 text-left"
              action="https://formspree.io/f/xovljgne"
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-line bg-ink focus:outline-none focus:border-teal transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-line bg-ink focus:outline-none focus:border-teal transition-colors"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-line bg-ink focus:outline-none focus:border-teal transition-colors resize-none"
                  placeholder="Tell me what you're building"
                />
              </div>

              <button
                type="submit"
                className="signal-button w-full justify-center"
              >
                Send message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
