export const GridField = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-field h-[900px]" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[640px] w-[900px] rounded-full opacity-[0.16] blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--amber)) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-[420px] right-[-200px] h-[520px] w-[700px] rounded-full opacity-[0.14] blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--teal)) 0%, transparent 65%)",
        }}
      />
    </div>
  );
};
