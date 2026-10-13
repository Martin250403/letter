import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import { useReducedMotion } from '../hooks/useScroll';

export default function SurpriseEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const reduced = useReducedMotion();

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowNote(true), reduced ? 0 : 600);
    } else {
      setShowNote(false);
      setTimeout(() => setIsOpen(false), reduced ? 0 : 300);
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-cream" aria-label="Surprise note">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.6 }}
          className="font-handwritten text-xl text-text-light mb-8"
        >
          Psst... there's a little surprise for you ✦
        </motion.p>

        {/* Envelope */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.5 }}
          className="inline-block"
        >
          <button
            onClick={handleOpen}
            className="envelope-wrapper focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-4 rounded-md"
            aria-label={isOpen ? 'Close the surprise envelope' : 'Open the surprise envelope'}
            aria-expanded={isOpen}
          >
            <div className={`envelope-body ${isOpen ? 'envelope-open' : ''}`}>
              <div className="envelope-flap" />
              <div className="envelope-heart">💌</div>

              {/* Bottom flap decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-warm/50 to-transparent rounded-b" />

              {/* Tiny wax seal */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-rose to-burgundy flex items-center justify-center">
                <span className="text-white text-xs">♡</span>
              </div>
            </div>
          </button>
        </motion.div>

        {/* Revealed note */}
        <AnimatePresence>
          {showNote && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: reduced ? 0 : 0.5, ease: 'easeOut' }}
              className="mt-8 bg-ivory border border-rose/20 rounded-lg p-8 max-w-md mx-auto shadow-sm"
            >
              <div className="flex justify-center mb-4">
                <span className="text-rose text-2xl">✦</span>
              </div>
              <p className="font-serif text-lg md:text-xl text-text-primary leading-relaxed italic">
                "{siteContent.envelope.message}"
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-8 h-px bg-rose/30" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && !showNote && (
          <p className="mt-6 text-text-light text-sm animate-pulse">
            Opening...
          </p>
        )}
      </div>
    </section>
  );
}
