import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-ink text-foreground flex flex-col items-center justify-center px-4 text-center gap-6">
      <span className="mono-tag text-amber">Error 404</span>
      <h1 className="text-4xl md:text-6xl font-bold">Route not found.</h1>
      <p className="text-muted max-w-md">
        This path does not resolve to anything in production. It happens,
        even to well-tested systems.
      </p>
      <a href="/" className="signal-button">
        <ArrowLeft size={16} />
        Back to base
      </a>
    </div>
  );
};
