import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import BuildIt from "../../public/BuildIt.png";
import QuicGPT from "../../public/QuickGPT.png";
import BookNow from "../../public/Booknow.png";

const otherProjects = [
  {
    id: 1,
    title: "Book Now",
    description:
      "A car rental booking front end built with React and Node.js: available fleet, pricing and a responsive booking flow from search to confirmation.",
    image: BookNow,
    tags: ["React", "Tailwind CSS", "Node.js"],
    demoUrl: "https://car-rental-booking.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "BuildIt",
    description:
      "A resume rebuilder that turns a plain CV into a clean, modern document tailored to any career path, from tech to medicine to finance.",
    image: BuildIt,
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    demoUrl: "https://build-it-omega.vercel.app/",
    githubUrl: "https://github.com/lukmanuthmanabubakr/Resume-frontend",
  },
  {
    id: 3,
    title: "QuickGPT",
    description:
      "An AI platform for text and image generation with a Stripe-backed credit system, built for a fast, uncomplicated top-up-and-go experience.",
    image: QuicGPT,
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://quick-chat-eight-topaz.vercel.app",
    githubUrl: "https://github.com/lukmanuthmanabubakr/Quick-chat",
  },
];

const TTLMockup = () => (
  <div className="panel overflow-hidden">
    {/* browser chrome */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-ink">
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="h-2.5 w-2.5 rounded-full bg-line" />
      <span className="ml-3 font-mono text-[11px] text-muted tracking-wide">
        ttltours.com
      </span>
      <span className="ml-auto live-dot" />
    </div>

    {/* faux interface */}
    <div className="p-6 space-y-4 bg-ink">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-24 bg-foreground/20" />
        <div className="flex gap-2">
          <div className="h-6 w-14 border border-line" />
          <div className="h-6 w-14 bg-amber/90" />
        </div>
      </div>

      <div className="h-28 sm:h-36 border border-line relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--teal)/0.35), transparent 60%), linear-gradient(315deg, hsl(var(--amber)/0.3), transparent 55%)",
          }}
        />
        <span className="absolute left-3 top-1/2 h-2 w-2 rounded-full bg-amber" />
        <span className="absolute left-1/3 top-1/3 h-2 w-2 rounded-full bg-teal" />
        <span className="absolute right-8 bottom-6 h-2 w-2 rounded-full bg-teal" />
        <span className="absolute right-1/4 top-1/4 h-2 w-2 rounded-full bg-amber" />
        <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 300 140" fill="none">
          <path d="M20 70 Q100 20 150 47 T280 100" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="h-16 border border-line bg-foreground/5" />
        <div className="h-16 border border-line bg-foreground/5" />
        <div className="h-16 border border-line bg-foreground/5" />
      </div>
    </div>
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

        {/* Flagship: TTL Tours */}
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
            <TTLMockup />
          </div>
        </div>

        {/* Other builds */}
        <h3 className="mono-tag mb-8 text-left">More builds</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.id} className="panel overflow-hidden card-lift text-left">
              <div className="h-44 overflow-hidden border-b border-line">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

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
