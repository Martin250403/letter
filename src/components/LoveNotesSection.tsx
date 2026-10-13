import { motion } from 'framer-motion';
import { Heart, Smile, Coffee, Sparkles, Camera, Star } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { useReducedMotion } from '../hooks/useScroll';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Heart,
  Smile,
  Coffee,
  Sparkles,
  Camera,
  Star,
};

export default function LoveNotesSection() {
  const { loveNotes } = siteContent;
  const reduced = useReducedMotion();

  return (
    <section id="love-notes" className="py-20 md:py-28 px-4 bg-cream">
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
            {loveNotes.sectionHeading}
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            {loveNotes.introText}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveNotes.notes.map((note, i) => {
            const IconComponent = iconMap[note.icon] || Heart;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.1 }}
                className="bg-ivory rounded-lg p-6 border border-rose/20 hover:border-rose/40 transition-all hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-full bg-blush/50 flex items-center justify-center mb-4 group-hover:bg-rose/30 transition-colors">
                  <IconComponent size={20} className="text-burgundy" />
                </div>
                <h3 className="font-serif text-xl text-text-primary mb-2">
                  {note.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {note.message}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
