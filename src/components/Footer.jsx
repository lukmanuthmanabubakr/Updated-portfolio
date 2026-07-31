import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-line relative">
      <div className="container flex flex-wrap justify-between items-center gap-4">
        <p className="font-mono text-xs text-muted tracking-wide">
          &copy; {new Date().getFullYear()} Abubakr Lukman-Uthman. Built and
          shipped from Lagos.
        </p>
        <a
          href="#hero"
          className="p-2.5 border border-line hover:border-amber hover:text-amber transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
