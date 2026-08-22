import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import BuildIt from "../../public/BuildIt.png";
import SkillTracker from "../../public/skill-b-t.png";
import TTLTours from "../../public/ttl.jpeg";

const methodStyles = {
  GET: "bg-teal/15 text-teal",
  POST: "bg-amber/15 text-amber",
  PATCH: "bg-foreground/10 text-foreground/80",
  PUT: "bg-foreground/10 text-foreground/80",
  DELETE: "bg-foreground/10 text-foreground/60",
};

// Reusable stand-in for a project preview when there's an interactive
// Swagger/OpenAPI doc instead of a static screenshot. Reuse this for the
// next backend projects that get Swagger docs added.
const SwaggerPreview = ({ label, endpoints }) => (
  <div className="h-44 border-b border-line bg-ink flex flex-col">
    <div className="flex items-center gap-2 px-3 py-2.5 border-b border-line/70 shrink-0">
      <span className="h-2 w-2 rounded-full bg-line" />
      <span className="h-2 w-2 rounded-full bg-line" />
      <span className="h-2 w-2 rounded-full bg-line" />
      <span className="ml-2 font-mono text-[10px] text-muted truncate">
        {label}
      </span>
      <span className="ml-auto live-dot shrink-0" />
    </div>
    <div className="flex-1 px-3 py-2.5 space-y-2 overflow-hidden">
      {endpoints.map((e) => (
        <div key={e.path} className="flex items-center gap-2 font-mono text-[10px]">
          <span
            className={cn(
              "px-1.5 py-0.5 font-semibold tracking-wide shrink-0",
              methodStyles[e.method]
            )}
          >
            {e.method}
          </span>
          <span className="text-muted truncate">{e.path}</span>
        </div>
      ))}
    </div>
  </div>
);

const otherProjects = [
  {
    id: 1,
    title: "Skill-Based Learner Tracker",
    description:
      "A backend API that tracks how a learner's skills develop over time, moving them through mastery levels as they progress, with the whole thing documented and testable straight from Swagger.",
    image: SkillTracker,
    tags: ["Node.js", "Swagger"],
    demoUrl: "https://skill-based-learner-tracker.vercel.app/api/docs",
    githubUrl: "https://github.com/lukmanuthmanabubakr/Skill-Based-Learner-Tracker",
  },
  {
    id: 2,
    title: "Velo (Ledger-Core)",
    description:
      "A financial reconciliation engine: a Nomba webhook handler with idempotent event handling, a payment-matching engine that reconciles incoming transfers against pending invoices, and an immutable ledger writer behind all of it, run through BullMQ and Redis.",
    endpoints: [
      { method: "POST", path: "/webhooks/nomba" },
      { method: "POST", path: "/reconciliation/run" },
      { method: "GET", path: "/ledger/:accountId" },
      { method: "GET", path: "/transactions/:id/status" },
    ],
    tags: ["Node.js", "Redis", "BullMQ", "Nomba"],
    demoUrl: "https://velo-credit-ledger-core.vercel.app/",
    githubUrl: "https://github.com/Ledger-OS-Infra",
  },
  {
    id: 3,
    title: "BuildIt",
    description:
      "A resume rebuilder that turns a plain CV into a clean, modern document tailored to any career path, from tech to medicine to finance.",
    image: BuildIt,
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    demoUrl: "https://build-it-omega.vercel.app/",
    githubUrl: "https://github.com/lukmanuthmanabubakr/Resume-frontend",
  },
];

// Browser-chrome frame wrapping the real screenshot, keeps the branded
// "live site" look instead of a bare, edge-to-edge image.
const TTLPreview = () => (
  <div className="panel overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-ink">
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="ml-3 font-mono text-[11px] text-muted tracking-wide">
        ttltours.com
      </span>
      <span className="ml-auto live-dot" />
    </div>
    <img
      src={TTLTours}
      alt="TTL Tours live site"
      className="w-full h-auto block"
    />
  </div>
);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="log-divider">
          <span className="mono-tag">Log 03</span>
          <span className="h-px flex-1 bg-line" />
          <span className="mono-tag">Deployed</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
          In <span className="text-amber">production</span>, not just a repo.
        </h2>
        <p className="text-muted mb-14 max-w-2xl text-left">
          The build below is live and taking real bookings. Everything after
          it is a smaller, self-contained project built to learn or ship
          something specific.
        </p>

        <div className="panel p-0 overflow-hidden mb-20 grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-10 flex flex-col justify-center order-2 lg:order-1">
            <span className="mono-tag text-teal mb-4">Flagship &middot; Live</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">TTL Tours</h3>
            <p className="text-muted leading-relaxed mb-4">
              A full-service retreat planning platform for the Nigerian
              market: flights, hotels and tour packages across Africa and
              beyond, for individuals, couples and groups. I led the backend
              through a full build sprint, spanning booking and payment flow,
              SMS notifications and the production API the frontend runs on.
            </p>
            <ul className="text-muted text-sm leading-relaxed mb-6 space-y-1.5">
              <li>&mdash; Paystack integration for retreat and tour payments</li>
              <li>&mdash; Africa's Talking SMS for booking confirmations</li>
              <li>&mdash; PostgreSQL, Redis and BullMQ behind the booking flow</li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Node.js", "TypeScript", "PostgreSQL", "Redis", "Paystack"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide border border-line text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <a
              href="https://ttltours.com"
              target="_blank"
              rel="noreferrer"
              className="signal-button w-fit"
            >
              Visit ttltours.com
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="p-6 md:p-10 order-1 lg:order-2 flex items-center bg-ink-raised/30">
            <TTLPreview />
          </div>
        </div>

        <h3 className="mono-tag mb-8 text-left">More builds</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.id} className="panel overflow-hidden card-lift text-left">
              {project.image ? (
                <div className="h-44 overflow-hidden border-b border-line">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ) : (
                <SwaggerPreview
                  label={new URL(project.demoUrl).pathname}
                  endpoints={project.endpoints}
                />
              )}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 font-mono text-[10px] uppercase tracking-wide border border-line text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-lg font-semibold mb-1.5">{project.title}</h4>
                <p className="text-muted text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-amber transition-colors duration-300"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-teal transition-colors duration-300"
                    aria-label={`Source code for ${project.title}`}
                  >
                    <Github size={19} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="outline-button w-fit inline-flex mx-auto"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lukmanuthmanabubakr"
          >
            See more on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};