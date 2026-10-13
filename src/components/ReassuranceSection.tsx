import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import { useReducedMotion } from '../hooks/useScroll';

export default function ReassuranceSection() {
  const { reassurance } = siteContent;
  const reduced = useReducedMotion();

  return (
    <section
      id="reassurance"
      className="py-20 md:py-28 px-4"
      style={{
        background: 'linear-gradient(180deg, #f2d7d0 0%, #f5e0db 50%, #f5ede4 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.6 }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-burgundy mb-16 leading-snug"
        >
          {reassurance.sectionHeading}
        </motion.h2>

        <div className="space-y-14">
          {reassurance.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : i * 0.15 }}
            >
              <h3 className="font-serif text-xl md:text-2xl text-text-primary mb-3 italic">
                "{item.heading}"
              </h3>
              <p className="text-text-secondary leading-relaxed max-w-md mx-auto">
                {item.message}
              </p>
              {i < reassurance.items.length - 1 && (
                <div className="mt-10 flex justify-center">
                  <span className="text-rose/40 text-sm">✦</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
