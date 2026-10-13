import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import type { MemoryPhoto } from '../content/siteContent';
import { useReducedMotion } from '../hooks/useScroll';

const categoryLabels: Record<string, string> = {
  all: 'All',
  early: 'Early Days',
  cute: 'Cute',
  dates: 'Dates',
  travel: 'Travel',
  kodaikanal: 'Kodaikanal',
  recent: 'Recent',
};

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: MemoryPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative flex flex-col items-center max-w-[95vw] max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 md:top-2 md:right-2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={photo.src}
            src={`${import.meta.env.BASE_URL}${photo.src.replace(/^\/+/, '')}`}
            alt={photo.alt || photo.caption || 'Memory photo'}
            className="lightbox-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Caption */}
        {photo.caption && (
          <p className="mt-4 text-white/80 font-handwritten text-xl text-center px-4">
            {photo.caption}
          </p>
        )}

        {/* Counter */}
        <p className="mt-2 text-white/40 text-sm">
          {index + 1} / {photos.length}
        </p>

        {/* Prev/Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors cursor-pointer"
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors cursor-pointer"
          aria-label="Next photo"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </motion.div>
  );
}

export default function MemoriesSection() {
  const { memories } = siteContent;
  const imageUrl = (src: string) =>
  `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`;
  const reduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadErrors, setLoadErrors] = useState<Set<string>>(new Set());

  const filteredPhotos = useMemo(() => {
    return memories.photos.filter((p) => {
      if (loadErrors.has(p.src)) return false;
      if (activeCategory === 'all') return true;
      return p.category === activeCategory;
    });
  }, [activeCategory, memories.photos, loadErrors]);

  const handleImageError = useCallback((src: string) => {
    setLoadErrors((prev) => new Set(prev).add(src));
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
    );
  }, [filteredPhotos.length]);
  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : null
    );
  }, [filteredPhotos.length]);

  // Random rotations for polaroid effect (stable per photo)
  const rotations = useMemo(
    () => memories.photos.map(() => (Math.random() - 0.5) * 4),
    [memories.photos]
  );

  const categories = ['all', ...Object.keys(categoryLabels).filter((k) => k !== 'all')];

  return (
    <section id="memories" className="py-20 md:py-28 px-4 bg-ivory">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-4">
            {memories.sectionHeading}
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            {memories.introText}
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="gallery-masonry">
          {filteredPhotos.map((photo, i) => {
            const origIndex = memories.photos.indexOf(photo);
            return (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : Math.min(i * 0.05, 0.3) }}
              >
                <div
                  className="polaroid cursor-pointer"
                  style={{ transform: `rotate(${rotations[origIndex]}deg)` }}
                  onClick={() => openLightbox(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
                  aria-label={`View ${photo.alt || photo.caption || 'memory photo'}`}
                >
                  <img
                    src={imageUrl(photo.src)}
                    alt={photo.alt || photo.caption || 'A memory together'}
                    loading="lazy"
                    className={`w-full object-cover rounded-sm ${
                      photo.featured ? 'aspect-[3/4]' : 'aspect-square'
                    }`}
                    onError={() => handleImageError(photo.src)}
                  />
                  {photo.caption && (
                    <p className="font-handwritten text-base md:text-lg text-text-secondary mt-2 text-center px-1">
                      {photo.caption}
                    </p>
                  )}
                  {photo.category && (
                    <p className="text-xs text-text-light mt-1 text-center uppercase tracking-wider">
                      {categoryLabels[photo.category] || photo.category}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredPhotos.length === 0 && (
          <p className="text-center text-text-light py-12">
            No photos in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={filteredPhotos}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
