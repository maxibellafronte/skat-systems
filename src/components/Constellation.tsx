type Star = {
  id: string;
  x: number;
  y: number;
  r: number;
  label?: string;
  sublabel?: string;
  highlight?: boolean;
};

const STARS: Star[] = [
  { id: "sadalmelik", x: 250, y: 70, r: 3.6, label: "Sadalmelik" },
  { id: "sadalsuud", x: 140, y: 118, r: 3.8, label: "Sadalsuud" },
  { id: "ancha", x: 90, y: 220, r: 2.2 },
  { id: "albali", x: 165, y: 196, r: 2.4 },
  { id: "sadachbia", x: 288, y: 176, r: 2.6, label: "Sadachbia" },
  { id: "eta", x: 322, y: 158, r: 2 },
  { id: "pi", x: 340, y: 208, r: 2 },
  { id: "zeta", x: 262, y: 226, r: 2.4 },
  {
    id: "skat",
    x: 268,
    y: 300,
    r: 4.6,
    label: "Skat",
    sublabel: "δ Aquarii",
    highlight: true,
  },
  { id: "tau", x: 224, y: 356, r: 1.8 },
  { id: "stream-1", x: 250, y: 400, r: 1.3 },
  { id: "stream-2", x: 196, y: 420, r: 1.1 },
  { id: "stream-3", x: 238, y: 452, r: 1 },
];

const LINES: [string, string][] = [
  ["sadalmelik", "sadalsuud"],
  ["sadalsuud", "albali"],
  ["sadalmelik", "sadachbia"],
  ["sadachbia", "eta"],
  ["sadachbia", "zeta"],
  ["eta", "pi"],
  ["pi", "zeta"],
  ["albali", "ancha"],
  ["zeta", "skat"],
  ["skat", "tau"],
  ["tau", "stream-1"],
  ["stream-1", "stream-2"],
  ["stream-2", "stream-3"],
];

function findStar(id: string) {
  const star = STARS.find((s) => s.id === id);
  if (!star) throw new Error(`Unknown star: ${id}`);
  return star;
}

export default function Constellation({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 420 480"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="skatGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent-strong)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke="var(--color-accent)" strokeOpacity="0.28" strokeWidth="1">
        {LINES.map(([from, to]) => {
          const a = findStar(from);
          const b = findStar(to);
          return (
            <line key={`${from}-${to}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          );
        })}
      </g>

      {STARS.map((star) => (
        <g key={star.id}>
          {star.highlight && (
            <circle cx={star.x} cy={star.y} r={22} fill="url(#skatGlow)" />
          )}
          <circle
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill={star.highlight ? "var(--color-accent-strong)" : "var(--color-star)"}
            className={star.highlight ? "twinkle" : undefined}
          />
          {star.label && (
            <text
              x={star.x + 10}
              y={star.y - 8}
              fontFamily="var(--font-sans)"
              fontSize={star.highlight ? 15 : 10}
              fill={star.highlight ? "var(--color-accent-strong)" : "var(--color-star-dim)"}
              letterSpacing="0.04em"
            >
              {star.label}
            </text>
          )}
          {star.sublabel && (
            <text
              x={star.x + 10}
              y={star.y + 10}
              fontFamily="var(--font-sans)"
              fontSize={10}
              fill="var(--color-star-faint)"
              fontStyle="italic"
            >
              {star.sublabel}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
