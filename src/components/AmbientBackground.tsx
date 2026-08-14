export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div
        className="light-a absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full opacity-[0.16] blur-[110px]"
        style={{ background: "var(--light-a)" }}
      />
      <div
        className="light-b absolute right-[-10rem] bottom-[-8rem] h-[26rem] w-[26rem] rounded-full opacity-[0.14] blur-[110px]"
        style={{ background: "var(--light-b)" }}
      />
      <div className="paper-grain absolute inset-0 opacity-60" />
    </div>
  );
}
