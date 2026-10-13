import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import { useReducedMotion } from '../hooks/useScroll';

export default function LetterSection() {
  const { letter, sender } = siteContent;
  const reduced = useReducedMotion();
  const paragraphs = letter.body.split('\n\n');
  const signOffLines = letter.signOff.split('\n');
  const senderName = sender.displayName || 'Yours ♡';

  const scrollToMemories = () => {
    const el = document.getElementById('memories');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="letter" className="py-20 md:py-28 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reduced ? 0 : 0.6 }}
          className="font-serif text-3xl md:text-4xl text-center text-burgundy mb-12"
        >
          {letter.sectionHeading}
        </motion.h2>

        {/* Decorative divider */}
        <div className="section-divider mb-12" />

        {/* The Letter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.2 }}
          className="letter-paper rounded-sm p-8 md:p-12 lg:p-16"
        >
          {/* Small decorative header */}
          <div className="flex items-center gap-2 mb-8 ml-8 md:ml-12">
            <span className="text-rose text-lg">✦</span>
            <div className="w-12 h-px bg-rose/30" />
          </div>

          {/* Letter paragraphs */}
          <div className="space-y-5 ml-8 md:ml-12 pr-4">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-text-primary leading-[1.9] text-[0.95rem] md:text-base ${
                  i === 0 ? 'font-serif text-lg md:text-xl italic text-rose-deep' : ''
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Sign-off */}
          <div className="mt-10 ml-8 md:ml-12">
            <div className="w-20 h-px bg-rose/20 mb-6" />
            {signOffLines.map((line, i) => (
              <p
                key={i}
                className="font-handwritten text-xl md:text-2xl text-burgundy"
              >
                {line}
              </p>
            ))}
            <p className="font-handwritten text-2xl md:text-3xl text-rose-deep mt-1">
              {senderName}
            </p>

            {/* Wax seal decoration */}
            <div className="mt-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-rose to-burgundy shadow-lg">
              <span className="text-white text-lg">♡</span>
            </div>
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: reduced ? 0 : 0.5, duration: reduced ? 0 : 0.6 }}
          className="text-center mt-12"
        >
          <button onClick={scrollToMemories} className="btn-primary">
            {letter.continueButtonText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
