import { useReducedMotion } from '../hooks/useScroll';

export default function FloatingHearts() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div aria-hidden="true">
      {Array.from({ length: 7 }).map((_, i) => (
        <span key={i} className="floating-heart">♡</span>
      ))}
    </div>
  );
}
