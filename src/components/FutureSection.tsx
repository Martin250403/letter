import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import { useReducedMotion } from '../hooks/useScroll';

export default function FutureSection() {
  const { future } = siteContent;
  const reduced = useReducedMotion();

  return (
    <section id="future" className="py-20 md:py-28 px-4 bg-ivory">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-4">
            {future.sectionHeading}
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            {future.introText}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {future.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.15 }}
              className="bg-cream rounded-lg p-8 text-center border border-rose/15 hover:border-rose/30 transition-all hover:shadow-sm"
            >
              <span className="text-3xl mb-4 block" role="img" aria-hidden="true">
                {card.emoji}
              </span>
              <h3 className="font-serif text-xl text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.3 }}
          className="text-center text-text-light text-sm italic max-w-lg mx-auto"
        >
          {future.footnote}
        </motion.p>
      </div>
    </section>
  );
}
