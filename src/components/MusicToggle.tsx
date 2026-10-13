import { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);

  const filename = siteContent.audio.filename;

  useEffect(() => {
    if (!filename) return;

    const audio = new Audio(`/${filename}`);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Check if audio file actually exists
    audio.addEventListener('canplaythrough', () => setHasAudio(true));
    audio.addEventListener('error', () => setHasAudio(false));
    audio.load();

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [filename]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Browser blocked autoplay, ignore
      });
    }
    setIsPlaying(!isPlaying);
  };

  if (!filename || !hasAudio) return null;

  return (
    <button
      onClick={toggle}
      className="music-toggle"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
