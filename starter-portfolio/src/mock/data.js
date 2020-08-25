import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Thu | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hootie Hoo! My name is',
  name: 'Thu Hoang',
  subtitle: '',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_6083.JPG',
  paragraphOne:
    "Hi there! I am Thu ✌️ and I'm from Hanoi, Vietnam 🇻🇳. I am a rising senior at the University of Rochester with a major in Computer Science, a minor in Economics and a cluster in Philosophy.",
  paragraphTwo:
    "I have always been interested in the intersection of technology and business. I want to build products that revolutionize the way our society works in a sleek and reliable way. Thus, I'm excited to learn about scalable system design for businesses, clean UI/UX design and safe transaction protocols.",
  paragraphThree:
    'I also love cooking, traveling and sustaining a healthy and balanced lifestyle. Hit me up for coffee chats, code pairs, meal preps and spontaneous runs! 💃',
  resume: 'https://drive.google.com/file/d/1WU4bgBcL9XtYT7YjtjE3nlEROBkue-j_/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'logo.png',
    title: 'PikaPlace',
    info:
      'An Android mobile application that helps friend groups to decide on the most convenient hangout place.',
    info2: 'Tech stack: Kotlin, Google Firebase, Google Maps API & Foursquare Places API.',
    url: 'https://www.youtube.com/watch?v=p6nX4KHZkcs&feature=youtu.be',
    repo: 'https://github.com/hphathu99/pikaplace', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'group-start.jpg',
    title: 'Safe Chat',
    info: 'An end-to-end encrypted group chat application on a simulated server.',
    info2: 'Tech stack: Python with PyCryptodome.',
    url: 'https://www.youtube.com/watch?v=euEOmj81nUA&feature=emb_title',
    repo: 'https://github.com/hphathu99/safe-group-chat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pocket.png',
    title: 'Pocket Breathalyzer',
    info:
      'A working prototype of a mobile application that detects drunken behaviour by conducting the one-leg-stand test and eye-gaze test',
    info2: 'Tech stack: OpenCV, PoseNet',
    url:
      'https://sites.google.com/s/12Rs0QJy49QwTc1_XRNUgrEmd8z170qcj/p/1oXQoNr9aILtjeuge2dcpnrGh8Z2SY_R3/edit',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email me',
  email: 'thoangph@u.rochester.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
