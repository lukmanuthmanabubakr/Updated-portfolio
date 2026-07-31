import { useEffect, useState } from "react";

const useLagosTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(formatted);
    };
    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  return time;
};

const fields = [
  { label: "Stack", value: "Node.js · TypeScript · Postgres" },
  { label: "Focus", value: "Payments · Security · Systems" },
  { label: "Base", value: "Lagos, NG" },
];

export const SystemStatus = () => {
  const time = useLagosTime();

  return (
    <div className="w-full border-y border-line bg-ink-raised/60 backdrop-blur-sm">
      <div className="container">
        {/* Row 1: always visible, exactly two items, never wraps oddly */}
        <div className="flex items-center justify-between py-3 gap-4 font-mono text-[11px] sm:text-xs tracking-[0.14em] uppercase">
          <span className="flex items-center gap-2 text-teal shrink-0">
            <span className="live-dot" />
            <span className="whitespace-nowrap">Available for work</span>
          </span>
          <span className="flex items-center gap-2 shrink-0 text-muted">
            <span className="text-muted/60 hidden xs:inline">Local</span>
            <span className="text-foreground/80 tabular-nums normal-case tracking-normal">
              {time || "--:--"} WAT
            </span>
          </span>
        </div>

        {/* Row 2: detail fields, own row so they can wrap freely without breaking row 1 */}
        <div className="hidden sm:flex flex-wrap items-center gap-x-8 gap-y-2 pb-3 font-mono text-xs tracking-[0.14em] uppercase border-t border-line/60 pt-3">
          {fields.map((f) => (
            <span key={f.label} className="flex items-center gap-2">
              <span className="text-muted/60">{f.label}</span>
              <span className="text-foreground/80 normal-case tracking-normal">
                {f.value}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};