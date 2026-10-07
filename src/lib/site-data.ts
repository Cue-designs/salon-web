export type ServiceCategory = "Cut" | "Colour" | "Care";

export const services: {
  name: string;
  category: ServiceCategory;
  duration: string;
  price: string;
  description: string;
}[] = [
  {
    name: "The signature shape",
    category: "Cut",
    duration: "60 min",
    price: "$78+",
    description:
      "A proper consultation, a shape that moves, and a finish you can recreate at home.",
  },
  {
    name: "Soft sculpt layers",
    category: "Cut",
    duration: "75 min",
    price: "$96+",
    description:
      "Airy, face-framing layers tailored to your texture and the way you actually wear your hair.",
  },
  {
    name: "The fringe visit",
    category: "Cut",
    duration: "20 min",
    price: "$28",
    description:
      "A quick little reset for your fringe, with a wash and styling refresh if you need it.",
  },
  {
    name: "Gloss & tone",
    category: "Colour",
    duration: "90 min",
    price: "$112+",
    description:
      "A translucent colour veil to add shine, soften brass, and bring your existing colour back to life.",
  },
  {
    name: "Sunlit dimension",
    category: "Colour",
    duration: "3 hr",
    price: "$185+",
    description:
      "Soft ribbons of brightness placed for your cut, your complexion, and a graceful grow-out.",
  },
  {
    name: "A whole new chapter",
    category: "Colour",
    duration: "4 hr",
    price: "$260+",
    description:
      "A full transformation, beginning with a strand test and an unhurried colour conversation.",
  },
  {
    name: "The head-space ritual",
    category: "Care",
    duration: "45 min",
    price: "$68",
    description:
      "A scalp reset, botanical steam, slow massage, and a quiet moment to come back to yourself.",
  },
  {
    name: "Repair & restore",
    category: "Care",
    duration: "30 min",
    price: "$48",
    description:
      "A strengthening treatment chosen for your hair's needs, finished with a soft blow-dry.",
  },
  {
    name: "Wash, set, go",
    category: "Care",
    duration: "45 min",
    price: "$62",
    description:
      "A deep cleanse and an easy, touchable finish for wherever the day takes you.",
  },
];

export const stylists = [
  {
    name: "Mara Ellis",
    role: "Founder · Cut & shape",
    mark: "ME",
    className: "portrait-mara",
    bio: "Mara loves a lived-in shape, a thoughtful fringe, and helping people feel at home in their own hair.",
  },
  {
    name: "Nico Reyes",
    role: "Colour · Curl specialist",
    mark: "NR",
    className: "portrait-nico",
    bio: "A colour thinker with a light hand. Nico is happiest creating dimension that looks like it has always been there.",
  },
  {
    name: "Imani Brooks",
    role: "Cut · Natural texture",
    mark: "IB",
    className: "portrait-imani",
    bio: "Imani works with your texture, never against it, and believes your wash day should feel like yours.",
  },
  {
    name: "Tess Morgan",
    role: "Care · Blowout artist",
    mark: "TM",
    className: "portrait-tess",
    bio: "Tess brings the head massage, the perfect playlist, and a very good answer to every hair-care question.",
  },
];

export const lookbookItems = [
  {
    title: "The long way around",
    category: "Cuts",
    className: "look-art-1",
    note: "A soft, weightless shape",
  },
  {
    title: "Apricot hour",
    category: "Colour",
    className: "look-art-2",
    note: "Warmth, without the fuss",
  },
  {
    title: "Let it curl",
    category: "Texture",
    className: "look-art-3",
    note: "A little more room to move",
  },
  {
    title: "A tiny rebellion",
    category: "Cuts",
    className: "look-art-4",
    note: "A fringe with a point of view",
  },
  {
    title: "Sundown, softened",
    category: "Colour",
    className: "look-art-5",
    note: "A gentle brightening",
  },
  {
    title: "Good in every light",
    category: "Texture",
    className: "look-art-6",
    note: "Natural texture, celebrated",
  },
  {
    title: "The Sunday shape",
    category: "Cuts",
    className: "look-art-7",
    note: "Easy does it",
  },
  {
    title: "Rosewood gloss",
    category: "Colour",
    className: "look-art-8",
    note: "A little shine goes far",
  },
];

export const journalEntries = [
  {
    title: "A fringe is a feeling",
    category: "CUT NOTES",
    date: "09.18.26",
    excerpt:
      "A small change with a surprisingly big point of view. Our guide to deciding if now is your fringe moment.",
    body: "The best fringe starts with a conversation about your mornings. How much time do you have? How does your hair dry? We shape around the real answer, not the fantasy version. Bring a photo, bring your questions, and we will find a version that feels like you.",
  },
  {
    title: "Colour that grows out kindly",
    category: "COLOUR NOTES",
    date: "08.24.26",
    excerpt:
      "The secret to low-maintenance colour is not less care. It is a better first plan.",
    body: "A softer root, considered placement, and a gloss between visits can make colour feel like yours for longer. We plan the grow-out before we pick up a brush, so the in-between is part of the design.",
  },
  {
    title: "Your curl pattern is not a problem to solve",
    category: "CARE NOTES",
    date: "07.09.26",
    excerpt:
      "A few things we wish every curly guest had heard sooner, from people who work with texture every day.",
    body: "Your pattern changes with length, moisture, weather, and the way you sleep. We cut dry when it helps us understand the shape, then talk through a routine with room for real life. No perfect-product list required.",
  },
  {
    title: "A five-minute ritual for slower mornings",
    category: "CARE NOTES",
    date: "06.12.26",
    excerpt:
      "A tiny scalp massage, a gentler towel, and one less thing to rush through.",
    body: "Start at the hairline with the pads of your fingers. Move in small circles, not scratches. Rinse longer than you think you need to, squeeze water out with a soft towel, then give your hair a moment before styling. Five quiet minutes can change the whole morning.",
  },
  {
    title: "What to bring to your first appointment",
    category: "THE STUDIO",
    date: "05.21.26",
    excerpt:
      "A few reference photos, a little honesty, and absolutely no need to know the right words.",
    body: "Photos help us understand the feeling you are drawn to, even when the exact cut is different. Tell us what you love, what you never want to repeat, and how much time you want to spend getting ready. The rest is our job.",
  },
  {
    title: "The case for a proper consultation",
    category: "THE STUDIO",
    date: "04.04.26",
    excerpt:
      "Good hair starts before the scissors. Here is what we mean when we say we want to hear the whole story.",
    body: "We ask about your routine, your history, and what made you book today. That is not small talk. It is how we make a plan together, and how we make sure the result still feels good after you leave the chair.",
  },
];

export function getWhatsAppHref(message: string) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
    /\D/g,
    "",
  );
  return phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
}
