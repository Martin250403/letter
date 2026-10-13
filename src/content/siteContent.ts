// ═══════════════════════════════════════════════════════════════════
// SITE CONTENT CONFIGURATION
// ═══════════════════════════════════════════════════════════════════
// Edit this file to personalize your website.
// You don't need to understand React — just change the text values.
// ═══════════════════════════════════════════════════════════════════

// ── Types ────────────────────────────────────────────────────────

export interface MemoryPhoto {
  /** Path to the image file relative to /public */
  src: string;
  /** Short title for the photo (optional) */
  title?: string;
  /** Personal caption to display under the photo */
  caption?: string;
  /** Date of the memory, if you remember (optional) */
  date?: string;
  /** Set to true to make this photo larger in the gallery */
  featured?: boolean;
  /** Alt text for accessibility */
  alt?: string;
  /** Category tag for the photo */
  category?: 'early' | 'cute' | 'dates' | 'travel' | 'kodaikanal' | 'recent';
}

export interface LoveNote {
  /** Small heading */
  title: string;
  /** The message / reason */
  message: string;
  /** Lucide icon name (e.g., 'Heart', 'Smile', 'Star') */
  icon: string;
}

export interface FutureCard {
  /** Card heading */
  title: string;
  /** Description text */
  description: string;
  /** Emoji or small visual */
  emoji: string;
}

export interface Reassurance {
  /** Bold heading */
  heading: string;
  /** Supporting message */
  message: string;
}

export interface SiteContent {
  meta: {
    pageTitle: string;
    metaDescription: string;
    themeColor: string;
  };
  recipient: {
    /** Her name or nickname. Leave as 'My Love' if you prefer not to use a name */
    displayName: string;
  };
  sender: {
    /** Your name or how you sign off. Leave empty for 'Yours ♡' */
    displayName: string;
  };
  dedication: {
    /** Optional date to display at the bottom (e.g., 'October 2026') */
    date: string;
  };
  opening: {
    preHeadline: string;
    headline: string;
    supportingText: string;
    buttonText: string;
  };
  letter: {
    sectionHeading: string;
    /** The full apology letter. Use \n\n for paragraph breaks. */
    body: string;
    signOff: string;
    continueButtonText: string;
  };
  memories: {
    sectionHeading: string;
    introText: string;
    photos: MemoryPhoto[];
  };
  loveNotes: {
    sectionHeading: string;
    introText: string;
    notes: LoveNote[];
  };
  reassurance: {
    sectionHeading: string;
    items: Reassurance[];
  };
  future: {
    sectionHeading: string;
    introText: string;
    cards: FutureCard[];
    footnote: string;
  };
  finale: {
    headline: string;
    body: string;
    madeWithLove: string;
    primaryButtonText: string;
    secondaryLinkText: string;
  };
  envelope: {
    /** The secret note inside the surprise envelope */
    message: string;
  };
  audio: {
    /** Filename of the audio file in /public (e.g., 'song.mp3'). Leave empty to hide the music control. */
    filename: string;
  };
}

// ── Content ──────────────────────────────────────────────────────
// ✏️  Edit the values below to make this website yours.
// ──────────────────────────────────────────────────────────────────

export const siteContent: SiteContent = {
  // ── Page metadata ──────────────────────────────────────────────
  meta: {
    pageTitle: 'For You ♡',
    metaDescription: 'A little something, made with love, just for you.',
    themeColor: '#f5e6e0',
  },

  // ── Names ──────────────────────────────────────────────────────
  // ✏️  Replace with her name and yours
  recipient: {
    displayName: 'My Love',
  },
  sender: {
    displayName: '',
  },

  // ── Dedication ─────────────────────────────────────────────────
  dedication: {
    date: 'October 2026',
  },

  // ── Section A: Opening ─────────────────────────────────────────
  opening: {
    preHeadline: 'A little something, made just for you.',
    headline: 'For My Favorite Person',
    supportingText:
      'Some feelings deserve more than a quick message. So I made you a little place filled with my words, our memories, and everything I want you to know.',
    buttonText: 'Open Your Little Love Letter ♡',
  },

  // ── Section B: The Letter ──────────────────────────────────────
  letter: {
    sectionHeading: "There's Something I Want You to Know",
    body: `My love,

I've been thinking about what you've told me, especially how you've been feeling that I've changed and that I don't care the way I used to.

I'm sorry that my actions have made you feel this way. I never want you to feel like you're asking for too much when all you want is to feel loved, cared for, and important to me.

I know that saying I care isn't enough if I don't show it in the little things. You deserve attention, effort, affection, and the feeling that I'm present with you, not just words telling you that you matter.

I don't want to dismiss what you've been feeling or try to convince you that you shouldn't feel that way. I want to listen to you and understand the moments when I've made you feel distant from me.

You mean so much to me, and I'm sorry for the times I haven't made that clear enough. I want to be more thoughtful, more present, and more consistent in the way I show my love.

I'm not writing this to ask you to forget everything or to make you forgive me right away. I just want you to know that your feelings matter to me, that I'm willing to listen, and that I want my actions to reflect the love I have for you.

You deserve a love that you can feel, not just one that you have to take my word for.

I'm sorry, my love. And I want to do better, one little thing at a time.`,
    signOff: 'With all my love,\nYours ♡',
    continueButtonText: "There's More I Want You to See",
  },

  // ── Section C: Memories ────────────────────────────────────────
  memories: {
    sectionHeading: 'Our Little World',
    introText:
      'Different days, different moments, and so many little memories that mean more to me than I can explain.',
    photos: [
      // ── Early Days ──
      { src: '/images/memories/memory-01.jpg', caption: 'Where it all started.', category: 'early', featured: true, alt: 'A memory from our early days together' },
      { src: '/images/memories/memory-02.jpg', caption: 'One of my favorite little moments with you.', category: 'early', alt: 'A cherished early memory' },
      { src: '/images/memories/memory-03.jpg', caption: 'I remember this more than you think.', category: 'early', alt: 'An early memory together' },
      // ── Cute Moments ──
      { src: '/images/memories/memory-04.jpg', caption: 'Your smile in this one gets me every time.', category: 'cute', alt: 'A cute moment together' },
      { src: '/images/memories/memory-05.jpg', caption: 'One of those days I wish I could relive.', category: 'cute', alt: 'A sweet moment' },
      { src: '/images/memories/memory-06.jpg', caption: 'The little things that make being with you special.', category: 'cute', featured: true, alt: 'A lovely moment between us' },
      { src: '/images/memories/memory-07.jpg', caption: 'I wish we could pause some moments just a little longer.', category: 'cute', alt: 'A beautiful moment' },
      { src: '/images/memories/memory-08.jpg', caption: 'This one always makes me smile.', category: 'cute', alt: 'A happy moment together' },
      { src: '/images/memories/memory-09.jpg', caption: 'Being with you feels like the easiest thing in the world.', category: 'cute', alt: 'Together and happy' },
      { src: '/images/memories/memory-10.jpg', caption: 'One memory I will always smile about.', category: 'cute', alt: 'A joyful moment' },
      // ── Dates ──
      { src: '/images/memories/memory-11.jpg', caption: 'A day that felt like it was just for us.', category: 'dates', featured: true, alt: 'A special date' },
      { src: '/images/memories/memory-12.jpg', caption: 'Some of the best moments are the simplest ones.', category: 'dates', alt: 'A date together' },
      { src: '/images/memories/memory-13.jpg', caption: 'I love the way ordinary days feel with you.', category: 'dates', alt: 'Out together' },
      { src: '/images/memories/memory-14.jpg', caption: 'You make everything more fun.', category: 'dates', alt: 'A fun outing' },
      // ── Travel ──
      { src: '/images/memories/memory-15.jpg', caption: 'Exploring the world is better with you.', category: 'travel', alt: 'Traveling together' },
      { src: '/images/memories/memory-16.jpg', caption: 'Adventures are only half as good without you.', category: 'travel', alt: 'A travel memory' },
      { src: '/images/memories/memory-17.jpg', caption: 'New places, same feeling of being happy beside you.', category: 'travel', featured: true, alt: 'An adventure together' },
      { src: '/images/memories/memory-18.jpg', caption: 'Every trip with you becomes a favorite story.', category: 'travel', alt: 'Traveling together' },
      { src: '/images/memories/memory-19.jpeg', caption: 'The world looks different when I see it with you.', category: 'travel', alt: 'A beautiful travel moment' },
      { src: '/images/memories/memory-20.jpeg', caption: 'Getting lost is half the fun with you.', category: 'travel', alt: 'Exploring together' },
      { src: '/images/memories/memory-21.jpeg', caption: 'Another little adventure, another favorite memory.', category: 'travel', alt: 'On the road together' },
      // ── Kodaikanal ──
      { src: '/images/memories/memory-22.jpeg', caption: 'Kodaikanal with you was something else.', category: 'kodaikanal', featured: true, alt: 'Kodaikanal trip' },
      { src: '/images/memories/memory-23.jpeg', caption: 'The hills, the air, and you.', category: 'kodaikanal', alt: 'In the hills of Kodaikanal' },
      { src: '/images/memories/memory-24.jpeg', caption: 'One of my favorite trips we have ever taken.', category: 'kodaikanal', alt: 'Kodaikanal memory' },
      { src: '/images/memories/memory-25.jpeg', caption: 'I keep coming back to these memories.', category: 'kodaikanal', alt: 'Kodaikanal scenery' },
      { src: '/images/memories/memory-26.jpeg', caption: 'Every moment there felt like a little escape.', category: 'kodaikanal', alt: 'Beautiful Kodaikanal' },
      { src: '/images/memories/memory-27.jpeg', caption: 'I would go back in a heartbeat.', category: 'kodaikanal', alt: 'A serene Kodaikanal moment' },
      { src: '/images/memories/memory-28.jpeg', caption: 'Some places feel magical because of who you are with.', category: 'kodaikanal', featured: true, alt: 'Kodaikanal together' },
      { src: '/images/memories/memory-29.jpeg', caption: 'You made that trip unforgettable.', category: 'kodaikanal', alt: 'A special Kodaikanal memory' },
      { src: '/images/memories/memory-30.jpeg', caption: 'This view, this moment, this person.', category: 'kodaikanal', alt: 'Kodaikanal views' },
      { src: '/images/memories/memory-31.jpeg', caption: 'Nothing beats traveling with your favorite person.', category: 'kodaikanal', alt: 'Kodaikanal adventures' },
      { src: '/images/memories/memory-32.jpeg', caption: 'A moment I never want to forget.', category: 'kodaikanal', alt: 'Kodaikanal memories' },
      { src: '/images/memories/memory-33.jpeg', caption: 'Grateful for this trip, grateful for you.', category: 'kodaikanal', alt: 'Ending Kodaikanal trip' },
      // ── Recent ──
      { src: '/images/memories/memory-34.jpg', caption: 'Even the recent days have their own kind of beauty.', category: 'recent', alt: 'A recent memory' },
      { src: '/images/memories/memory-35.jpg', caption: 'Still making memories worth keeping.', category: 'recent', featured: true, alt: 'Recent times together' },
      { src: '/images/memories/memory-36.jpg', caption: 'Every new moment with you matters.', category: 'recent', alt: 'A recent photo' },
      { src: '/images/memories/memory-37.jpg', caption: 'The little everyday moments I treasure.', category: 'recent', alt: 'Recent daily moment' },
      { src: '/images/memories/memory-38.jpg', caption: 'Still my favorite person to be around.', category: 'recent', alt: 'Together recently' },
      { src: '/images/memories/memory-39.jpg', caption: 'Here is to many more moments like this.', category: 'recent', alt: 'A recent moment' },
      { src: '/images/memories/memory-40.jpg', caption: 'Looking forward to what comes next, with you.', category: 'recent', alt: 'The latest memory' },
    ],
  },

  // ── Section D: Things I Love About You ─────────────────────────
  loveNotes: {
    sectionHeading: 'Little Things I Love About You',
    introText:
      'There are so many things about you that make you special to me.',
    notes: [
      {
        title: 'Your Smile',
        message: 'The little moments when you smile have a way of making an ordinary day feel special.',
        icon: 'Smile',
      },
      {
        title: 'The Way You Care',
        message: 'I appreciate the heart you bring into the things and people you care about.',
        icon: 'Heart',
      },
      {
        title: 'Being Around You',
        message: 'Some of my favorite memories are the simple moments when we get to be ourselves together.',
        icon: 'Coffee',
      },
      {
        title: 'The Little Things',
        message: "It's the small things about you, including the details that might seem ordinary, that make you special to me.",
        icon: 'Sparkles',
      },
      {
        title: 'Our Memories',
        message: 'I treasure the moments we have shared and the memories that are ours.',
        icon: 'Camera',
      },
      {
        title: 'You, Just as You Are',
        message: "You don't have to be perfect to be loved, appreciated, or important to me.",
        icon: 'Star',
      },
    ],
  },

  // ── Section E: Reassurance ─────────────────────────────────────
  reassurance: {
    sectionHeading: 'You Should Never Have to Guess Whether You Matter',
    items: [
      {
        heading: 'I want to listen.',
        message: 'Your feelings matter, even when it takes me time to understand them.',
      },
      {
        heading: 'I want to show up.',
        message: 'I want my care to be visible in the small things, not only in big gestures or emotional conversations.',
      },
      {
        heading: 'I want to keep trying.',
        message: 'I know that trust and closeness are built through consistent effort, and I want to give that effort.',
      },
    ],
  },

  // ── Section F: Future ──────────────────────────────────────────
  future: {
    sectionHeading: 'More Little Moments With You',
    introText:
      "I don't need every moment to be extraordinary. I just want to keep making time for the little things that bring us closer.",
    cards: [
      {
        title: 'More Time Together',
        description: 'Make space for quality time, without unnecessary distractions.',
        emoji: '☕',
      },
      {
        title: 'More Little Surprises',
        description: 'Thoughtful messages, small gestures, and remembering the details that matter.',
        emoji: '✉️',
      },
      {
        title: 'More Honest Conversations',
        description: "Listen to each other, communicate openly, and make room for each other's feelings.",
        emoji: '💬',
      },
    ],
    footnote:
      "These aren't promises that everything will suddenly become perfect. They're little ways I want to keep putting care into us.",
  },

  // ── Section G: Finale ──────────────────────────────────────────
  finale: {
    headline: 'If I Could Tell You One More Thing...',
    body: `You matter to me more than I sometimes manage to show.

I know a website can't replace a conversation, and pretty words can't replace consistent effort. I just wanted to make something that lets you see how much thought I've been putting into you and us.

I'm sorry for the moments when I've made you feel less loved than you deserve to feel.

I want to understand you better, listen more carefully, and show my love in ways you can actually feel.

You don't have to have all the answers right now. Whenever you're ready, I'd love to hear how you've been feeling and what you need from me.

Until then, I hope this little corner of the internet reminds you that you are important to me.

I love you, my favorite person. ♡`,
    madeWithLove: 'Made with love, just for you.',
    primaryButtonText: 'Back to Our Memories ♡',
    secondaryLinkText: 'Read My Letter Again',
  },

  // ── Surprise Envelope ──────────────────────────────────────────
  envelope: {
    message: 'Even in the little moments, I want you to know that you matter to me. ♡',
  },

  // ── Optional Audio ─────────────────────────────────────────────
  // ✏️  Place an audio file (e.g., song.mp3) in /public and set the filename here.
  //     Leave empty to hide the music control entirely.
  audio: {
    filename: '',
  },
};
