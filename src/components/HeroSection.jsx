import { ArrowDown, ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative px-4 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-7">
          <p className="mono-tag opacity-0 animate-rise justify-center flex items-center gap-2">
            <span className="h-px w-8 bg-line" />
            Backend Engineer &middot; Lagos, Nigeria
            <span className="h-px w-8 bg-line" />
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] opacity-0 animate-rise-1">
            Most backend failures are silent
            <br />
            until the money's already gone.
          </h1>

          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto opacity-0 animate-rise-2">
            If your product moves money, takes bookings, or talks to a
            payment provider, I build the backend that keeps it honest
            under load: it survives a real security review, fails safe
            instead of silently, and stays up when traffic spikes. It is
            already live, running for real users, not sitting in a demo.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-rise-3">
            <a href="#projects" className="signal-button">
              See it live
              <ArrowUpRight size={16} />
            </a>
            <a href="#about" className="outline-button">
              How I work
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 mt-16 md:mt-24 opacity-0 animate-rise-4">
          <span className="mono-tag">Scroll</span>
          <ArrowDown className="h-4 w-4 text-amber animate-bounce" />
        </div>
      </div>
    </section>
  );
};