import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import { useReducedMotion } from '../hooks/useScroll';

export default function FinaleSection() {
  const { finale, dedication } = siteContent;
  const reduced = useReducedMotion();
  const paragraphs = finale.body.split('\n\n');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="finale"
        className="relative py-24 md:py-32 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #f5ede4 0%, #f2d7d0 30%, #f0e4d8 70%, #faf6f1 100%)',
        }}
      >
        {/* Decorative stars */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {['top-[10%] left-[8%]', 'top-[15%] right-[12%]', 'top-[40%] left-[5%]', 'top-[60%] right-[8%]', 'bottom-[20%] left-[15%]', 'bottom-[15%] right-[20%]'].map((pos, i) => (
            <motion.span
              key={i}
              className={`absolute ${pos} text-rose/20 text-xs`}
              animate={reduced ? {} : { opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            >
              ✦
            </motion.span>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduced ? 0 : 0.8 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-burgundy mb-12 leading-snug"
          >
            {finale.headline}
          </motion.h2>

          {/* Body paragraphs */}
          <div className="space-y-5 mb-12">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.2 + i * 0.1 }}
                className="text-text-primary leading-relaxed text-base md:text-lg"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Made with love */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.5 }}
            className="font-handwritten text-xl text-rose-deep mb-8"
          >
            {finale.madeWithLove}
          </motion.p>

          {/* Decorative divider */}
          <div className="section-divider mb-10" />

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={() => scrollTo('memories')}
              className="btn-primary"
            >
              {finale.primaryButtonText}
            </button>
            <button
              onClick={() => scrollTo('letter')}
              className="btn-secondary"
            >
              {finale.secondaryLinkText}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ivory py-8 text-center">
        <p className="text-text-light text-sm">
          Made with <span className="text-rose">♡</span> {dedication.date ? `· ${dedication.date}` : ''}
        </p>
      </footer>
    </>
  );
}
