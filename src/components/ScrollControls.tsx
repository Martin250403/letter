import { ArrowUp } from 'lucide-react';
import { useShowScrollTop, useScrollProgress } from '../hooks/useScroll';

export default function ScrollControls() {
  const showTop = useShowScrollTop(500);
  const progress = useScrollProgress();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="reading-progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
