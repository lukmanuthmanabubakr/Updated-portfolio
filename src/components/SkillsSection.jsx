import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Backend
  { name: "Node.js / Express", level: 92, category: "backend" },
  { name: "TypeScript", level: 88, category: "backend" },
  { name: "PostgreSQL / Prisma", level: 85, category: "backend" },
  { name: "Redis", level: 82, category: "backend" },
  { name: "BullMQ (queues & jobs)", level: 80, category: "backend" },
  { name: "REST API design", level: 90, category: "backend" },

  // Security & infra
  { name: "HMAC / AES-256", level: 85, category: "security" },
  { name: "Security audit remediation", level: 80, category: "security" },
  { name: "Docker", level: 78, category: "security" },
  { name: "Playwright automation", level: 75, category: "security" },
  { name: "Webhook & idempotency design", level: 84, category: "security" },

  // Integrations & tools
  { name: "Paystack", level: 85, category: "integrations" },
  { name: "Africa's Talking (SMS/OTP)", level: 78, category: "integrations" },
  { name: "Nomba", level: 72, category: "integrations" },
  { name: "Git / GitHub", level: 90, category: "integrations" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "backend", label: "Backend" },
  { key: "security", label: "Security & Infra" },
  { key: "integrations", label: "Integrations" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 md:py-32 px-4 relative bg-ink-raised/40">
      <div className="container mx-auto max-w-5xl">
        <div className="log-divider">
          <span className="mono-tag">Log 02</span>
          <span className="h-px flex-1 bg-line" />
          <span className="mono-tag">Stack</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left">
          What actually ships<span className="text-teal">.</span>
        </h2>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] border transition-colors duration-300",
                activeCategory === category.key
                  ? "bg-amber text-amber-foreground border-amber"
                  : "border-line text-muted hover:text-foreground hover:border-teal"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="panel p-5 text-left">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="font-mono text-xs text-muted tabular-nums">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-line/60 overflow-hidden">
                <div
                  className="h-1.5 bg-teal origin-left"
                  style={{
                    width: skill.level + "%",
                    animation: "grow-bar 1.1s cubic-bezier(0.16,1,0.3,1) forwards",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
