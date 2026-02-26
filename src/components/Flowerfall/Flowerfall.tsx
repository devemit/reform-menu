import { useMemo } from 'react';
import './Flowerfall.css';

const FLOWER_COUNT = 55;

const PETAL_COLORS = [
  '#ffffff', // white
  '#fffef7', // cream white
  '#fffde7', // pale cream
  '#fff8e7', // ivory
];

interface SpringFlower {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: 'small' | 'normal' | 'large';
  color: string;
  rotation: number;
}

/** SVG: daisy – white ray petals around a yellow center */
function DaisySvg({ color }: { color: string }) {
  const cx = 12;
  const cy = 12;
  const innerR = 3;
  const outerR = 10;
  const petalCount = 12;
  const spread = 7; // degrees each side of center for each petal
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (i * 360) / petalCount - 90;
    const inner = { x: cx + innerR * Math.cos(toRad(angle)), y: cy + innerR * Math.sin(toRad(angle)) };
    const o1 = { x: cx + outerR * Math.cos(toRad(angle - spread)), y: cy + outerR * Math.sin(toRad(angle - spread)) };
    const o2 = { x: cx + outerR * Math.cos(toRad(angle + spread)), y: cy + outerR * Math.sin(toRad(angle + spread)) };
    return `M${inner.x} ${inner.y} L${o1.x} ${o1.y} L${o2.x} ${o2.y} Z`;
  });
  const d = petals.join(' ');

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d={d} fill={color} stroke="rgba(255,255,255,0.6)" strokeWidth="0.35" />
      <circle cx={cx} cy={cy} r="3" fill="#ffd54f" stroke="rgba(255,193,7,0.5)" strokeWidth="0.4" />
    </svg>
  );
}

function Flowerfall() {
  const flowers = useMemo<SpringFlower[]>(() => {
    return Array.from({ length: FLOWER_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 8 + Math.random() * 12,
      size: ['small', 'normal', 'large'][Math.floor(Math.random() * 3)] as SpringFlower['size'],
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      rotation: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="flowerfall" aria-hidden>
      {flowers.map(({ id, left, delay, duration, size, color, rotation }) => (
        <div
          key={id}
          className={`spring-flower spring-flower--${size}`}
          style={{
            left: `${left}%`,
            animation: `flowerfall ${duration}s linear ${delay}s infinite`,
            '--start-rotation': `${rotation}deg`,
          } as React.CSSProperties}
        >
          <DaisySvg color={color} />
        </div>
      ))}
    </div>
  );
}

export default Flowerfall;
