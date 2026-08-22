export const GridField = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-field h-[900px]" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[900px] w-[1200px] opacity-[0.22]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--amber)) 0%, transparent 45%)",
        }}
      />
      <div
        className="absolute top-[420px] right-[-260px] h-[760px] w-[980px] opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--teal)) 0%, transparent 45%)",
        }}
      />
    </div>
  );
};