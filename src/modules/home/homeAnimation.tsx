import { useCallback, useEffect, useRef, useState } from 'react';

function SvgReactLine({
  x1 = 0,
  y1 = 0,
  x2 = 0,
  y2 = 0,
}: {
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
}) {
  return (
    <line
      stroke="#006a4eC0"
      strokeWidth={Math.random() * 2}
      strokeLinecap="round"
      className="drop-shadow-sm"
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
    />
  );
}

function createPoints(numberOfLines: number, r: number): [number, number][] {
  const points: [number, number][] = [];
  for (let i = 0; i < numberOfLines; i++) {
    const d = 360 / (i + 1);
    points.push([
      r + r * Math.cos((180 / Math.PI) * d),
      r + r * Math.sin((180 / Math.PI) * d),
    ]);
  }
  return points;
}

function createInitialLines(
  numberOfLines: number,
  points: [number, number][],
): Connection[] {
  const connections: Connection[] = [];
  for (let i = 0; i < numberOfLines; i++) {
    connections.push([
      points[(Math.random() * numberOfLines) >> 0],
      points[(Math.random() * numberOfLines) >> 0],
    ]);
  }
  return connections;
}
function animate(
  initalLines: Connection[],
  numberOfLines: number,
  points: [number, number][],
): Connection[] {
  const connections: Connection[] = initalLines;
  for (let i = 0; i < 10; i++) {
    const connection = connections[(Math.random() * numberOfLines) >> 0];
    connection[0] = points[(Math.random() * numberOfLines) >> 0];
    connection[1] = points[(Math.random() * numberOfLines) >> 0];
  }
  return [...connections];
}

type Connection = [[number, number], [number, number]];

const LINES_NUMBER = 120;
const R = 50;
const POINTS = createPoints(LINES_NUMBER, R);

export function HomeAnimation() {
  const svg = useRef<SVGSVGElement>(null);
  const [connections, setConnections] = useState<Connection[]>(
    createInitialLines(LINES_NUMBER, POINTS),
  );

  const calculateNewConnections = useCallback(() => {
    setConnections((lines) => animate(lines, LINES_NUMBER, POINTS));
  }, [setConnections]);

  useEffect(() => {
    const interval = setInterval(calculateNewConnections, 1000 / 24);
    return () => clearInterval(interval);
  }, [svg.current]);

  return (
    <svg
      ref={svg}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-1/2 top-1/2 -z-20 size-3/4 -translate-x-1/2 -translate-y-1/2 !transform-gpu"
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        strokeWidth="3"
        fill="#121212"
      ></circle>
      <defs>
        <mask id="circle-mask">
          <rect
            width="100%"
            height="100%"
            fill="white"
          />
          <circle
            cx="50"
            cy="50"
            r="50"
            fill="121212"
          />
        </mask>
      </defs>
      <g mask="url(#circle-mask)">
        {...connections.map((coords, i) => (
          <SvgReactLine
            key={i}
            x1={coords[0][0]}
            y1={coords[0][1]}
            x2={coords[1][0]}
            y2={coords[1][1]}
          />
        ))}
      </g>
    </svg>
  );
}
