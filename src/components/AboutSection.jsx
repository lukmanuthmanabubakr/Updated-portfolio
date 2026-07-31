import { Database, ShieldCheck, Layers } from "lucide-react";

const focusAreas = [
  {
    icon: Database,
    title: "Systems & Data",
    body: "Node.js and TypeScript services backed by PostgreSQL and Redis, built with BullMQ for jobs that cannot be allowed to silently fail.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Audit",
    body: "HMAC-signed webhooks, AES-256 at rest, kill-switch SLAs and remediation work that has to survive a formal Gate review, not just a demo.",
  },
  {
    icon: Layers,
    title: "Built Around the Business",
    body: "I integrate into how a business already runs: its existing payment providers, its customer channels, its constraints. Clients don't rebuild their operation around my code, my code fits theirs.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="log-divider">
          <span className="mono-tag">Log 01</span>
          <span className="h-px flex-1 bg-line" />
          <span className="mono-tag">About</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A backend engineer who treats
              <span className="text-amber"> production</span> like it matters.
            </h2>

            <p className="text-muted leading-relaxed">
              The work I am proudest of is not the code, it is what that code
              survived. I have taken backend systems through formal security
              audits and come out with a clean pass, built kill-switches that
              cut access in under a second when something looks wrong, and
              shipped payment and booking flows that now carry real traffic
              in production without falling over. That is the bar I hold
              every system to: can it take a hit and keep working.
            </p>

            <p className="text-muted leading-relaxed">
              My stack centres on Node.js, Express and TypeScript, with
              PostgreSQL through Prisma, Redis and BullMQ handling state and
              queues, and Docker keeping it all reproducible. I have built
              Playwright automation against portals that were never meant to
              be scripted, and integrated payment and messaging providers
              like Paystack, Nomba and Africa's Talking into systems people
              use every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="signal-button">
                Get in touch
              </a>
              <a
                href="/Abubakr_Resume.pdf"
                download
                className="outline-button"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="panel p-6 card-lift text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-line text-amber shrink-0">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {area.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {area.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};