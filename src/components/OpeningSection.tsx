import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { useReducedMotion } from '../hooks/useScroll';

export default function OpeningSection() {
  const { opening, recipient } = siteContent;
  const reduced = useReducedMotion();

  const scrollToLetter = () => {
    const el = document.getElementById('letter');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: reduced ? 0 : 0.2, delayChildren: reduced ? 0 : 0.3 },
    },
  };

  const item: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.8, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="opening"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden paper-texture"
    >
      {/* Animated background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="soft-glow bg-rose/30"
          style={{ top: '20%', left: '10%' }}
          animate={reduced ? {} : { scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="soft-glow bg-champagne/40"
          style={{ top: '60%', right: '5%' }}
          animate={reduced ? {} : { scale: [1.2, 1, 1.2], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="soft-glow bg-blush/30"
          style={{ bottom: '10%', left: '40%' }}
          animate={reduced ? {} : { scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-2xl"
      >
        {/* Pre-headline */}
        <motion.p
          variants={item}
          className="font-handwritten text-xl md:text-2xl text-text-light mb-4"
        >
          {opening.preHeadline}
        </motion.p>

        {/* Decorative line */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <div className="w-16 h-px bg-rose/40" />
          <span className="mx-3 text-rose text-sm">♡</span>
          <div className="w-16 h-px bg-rose/40" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight"
          style={{
            backgroundImage: 'linear-gradient(135deg, #8b4558, #d4919a, #8b4558)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {opening.headline}
        </motion.h1>

        {/* Recipient name */}
        {recipient.displayName && (
          <motion.p
            variants={item}
            className="font-handwritten text-2xl md:text-3xl text-rose-deep mt-3"
          >
            {recipient.displayName}
          </motion.p>
        )}

        {/* Supporting text */}
        <motion.p
          variants={item}
          className="mt-8 text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto"
        >
          {opening.supportingText}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={item} className="mt-10">
          <button onClick={scrollToLetter} className="btn-primary">
            {opening.buttonText}
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-rose/50" size={24} />
      </motion.div>
    </section>
  );
}
