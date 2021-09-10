import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Arif Rasim', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "My name is",
  name: 'Arif Rasim',
  subtitle: "Welcome to my page.",
  cta: 'More about me ',
};

// ABOUT DATA
export const aboutData = {
  
  paragraphOne: "I'm Arif Rasim a web developer.",
  paragraphTwo: 'I love programming and dedicating myself to my job.',
  paragraphThree: "I love learning new skills on daily basis and using them to find better solutions.",
  resume: 'https://drive.google.com/file/d/1yFsi0y0-oZgzPhwf3nZvamovnoCJg7Ta/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ecommerce2.png',
    title: 'ARStore',
    info: 'ARStore is an ecommerse website with user-authentication system, advanced payment options, cart management system, wishlist and other features.',
    info2: 'Enjoy your shopping. ',
    url: 'http://arifrasim3.pythonanywhere.com/',
    repo: 'https://github.com/ArifRasim/ARStore', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'stars2.jpg',
    title: 'Social Star',
    info: 'Social Star is a platform where the great minds interested in outer space gather together to discuss everything about the stars.',
    info2: 'You can join them to have some fun.',
    url: 'https://arifrasim1.pythonanywhere.com/',
    repo: 'https://github.com/ArifRasim/socialstar', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'animals.jpg',
    title: 'Petstagram',
    info: "Petstagram is a website where guest users can browse through to see the most beautiful pets on earth.",
    info2: 'While logged in users can post their pets and like/comment any pet they want.',
    url: 'https://arifrasim.pythonanywhere.com/',
    repo: 'https://github.com/ArifRasim/Petstagram', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to contact me for any question you have.',
  btn: '',
  email: 'arifrasim1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://bg.linkedin.com/in/arif-rasim-b3ab84214',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ArifRasim',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:arifrasim1@gmail.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
