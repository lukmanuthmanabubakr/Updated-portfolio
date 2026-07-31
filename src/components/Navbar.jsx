import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-ink/90 backdrop-blur-md border-b border-line"
          : "py-5 border-b border-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="font-mono text-sm tracking-[0.14em] uppercase text-foreground flex items-center gap-2"
          href="#hero"
        >
          <span className="text-amber">&gt;</span>
          Abubakr Lukman
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-teal transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Abubakr_Resume.pdf"
            download
            className="outline-button !py-2 !px-4 text-[11px]"
          >
            Resume
          </a>
        </div>

        {/* mobile nav toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-ink/98 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="font-mono text-lg uppercase tracking-[0.14em] text-foreground hover:text-teal transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Abubakr_Resume.pdf"
              download
              className="signal-button mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
