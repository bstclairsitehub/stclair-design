export default function Divider() {
  return (
    <div
      className="h-px mx-6 md:mx-12"
      style={{
        background:
          "linear-gradient(to right, transparent, var(--color-sc-border), transparent)",
      }}
    />
  );
}
