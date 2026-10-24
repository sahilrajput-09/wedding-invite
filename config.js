/* ============================================================
   ROYAL WEDDING INVITE — CLIENT CONFIG
   Everything a new client needs changed lives in this file.
   Edit, save, done. No other file needs touching.
   ============================================================ */
window.WEDDING_CONFIG = {

  couple: {
  groom: "Ashish",
  bride: "Sheetal",
  groomFull: "Ashish",
  brideFull: "Sheetal",
  monogram: "A · S",           // shown in the wax seal + header
    tagline: "Two souls, one sacred fire",
  },

  // Main wedding moment — drives the live countdown
  wedding: {
    dateISO: "2026-11-20T19:08:00+05:30",   // muhurat time
    dateDisplay: "Friday, 20 November 2026",
    muhurat: "Shubh Muhurat · 7:08 PM",
  },

  // The celebrations — rendered in order
  events: [
    {
      id: "haldi",
      name: "Haldi",
      icon: "haldi",                    // haldi | sangeet | wedding | reception
      date: "Wed, 18 Nov 2026",
      time: "10:00 AM onwards",
      venue: "At Home",
      line: "Turmeric, laughter and golden blessings",
      accent: "#D99A2B",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      icon: "sangeet",
      date: "Wed, 18 Nov 2026",
      time: "7:00 PM onwards",
      venue: "At Home",
      line: "A night of music, dance and dazzle",
      accent: "#5B3A8E",
    },
    {
      id: "wedding",
      name: "The Wedding",
      icon: "wedding",
      date: "Friday, 20 Nov 2026",
      time: "Baraat 5:30 PM · Pheras 7:08 PM",
      venue: "The Royal Palace Gardens",
      line: "Seven vows around the sacred fire",
      accent: "#7A1F3D",
    },
    {
      id: "reception",
      name: "Reception",
      icon: "reception",
      date: "Sun, 22 Nov 2026",
      time: "7:30 PM onwards",
      venue: "TBA",
      line: "An evening of royal festivity",
      accent: "#B08A3E",
    },
  ],

  
venue: {
  name: "SHREE BHARAT PARTY PLOT",
  address: "SHREE BHARAT PARTY PLOT, Ahmedabad, Gujarat, India",
  mapsQuery: "https://www.google.co.in/maps/place/SHREE+BHARAT+PARTY+PLOT/@23.0029547,72.6342269,17z/",
},

  rsvp: {
    // Replace with the couple's real Google Form (use the /viewform link)
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe_PLACEHOLDER/viewform?embedded=true",
    deadline: "Please respond by 1 November 2026",
  },

  // Scratch-card hidden message
  scratch: {
    heading: "A little secret, just for you",
    message: "You hold a special place in our story — join us for a private family dinner on the 25th. Shhh! 🤫",
  },

  // Theme — the royal palette (matches the origami film)
  theme: {
    maroon:  "#6D1A33",
    maroonDeep: "#4A0F22",
    gold:    "#C9A24B",
    goldSoft:"#E5C878",
    ivory:   "#F4EBDB",
    inkOnIvory: "#3A2230",
  },

  frames: {
    count: 181,                 // scrub frames per tier
    loPath: "assets/frames/lo/",
    hiPath: "assets/frames/hi/",
    prefix: "f_",               // f_001.webp … f_181.webp
    ext: ".webp",
  },

  // The Hidden Moment — scroll-driven film
  sanctum: {
    count: 121,
    path: "assets/frames2/",
    prefix: "s_",               // s_001.webp … s_121.webp
    ext: ".webp",
    heading: "The Hidden Moment",
    eyebrow: "A sacred moment awaits",
    hint: "Scroll gently to unfold this hidden moment",
    veilText: "A sacred moment awaits",
  },
};
