// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'joynalbokhsho', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 69, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['joynalbokhsho/joynalbokhsho.github.io', ''], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BD ZONE',
          description:
            'Bangladeshi Top Minecraft Server.',
          imageUrl:
            'https://media.discordapp.net/attachments/1142479651533508739/1188179713072574524/bdzonee.gif',
          link: 'https://bdzonemc.com/discord',
        },
        {
          title: 'BDZONEMC.COM',
          description:
            'BD ZONE Forum Website.',
          imageUrl:
            'https://media.discordapp.net/attachments/860390018936602644/1188167308066181170/image.png',
          link: 'https://bdzonemc.com',
        },
        {
          title: 'IP Checker',
          description:
            'Find the geolocation of an IP address.',
          imageUrl:
            'https://cdn.discordapp.com/attachments/860390018936602644/1188169456967495680/image.png',
          link: 'https://bdzonemc.com/ip',
        },
        {
          title: 'MinecraftBD',
          description:
            'MinecraftBD Blog.',
          imageUrl:
            'https://media.discordapp.net/attachments/860390018936602644/1188171027113586778/image.png',
          link: 'https://minecraftbd.com',
        },
        {
          title: 'BDZONE STORE',
          description:
            'BDZONE STORE APPLICATION.',
          imageUrl:
            'https://media.discordapp.net/attachments/860390018936602644/1188174556242903170/image.png',
          link: 'https://play.google.com/store/apps/details?id=com.bdzonemc.store',
        },
        {
          title: 'BodyBloom: Weight Loss Aid',
          description:
            'Android Application.',
          imageUrl:
            'https://media.discordapp.net/attachments/860390018936602644/1191726389989224509/bodybloom.png',
          link: 'https://play.google.com/store/apps/details?id=com.loseweightaidds.forwomen',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Joynal Bokhsho',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'joynalbokhsho',
    twitter: 'joynalbokhsho',
    mastodon: '',
    facebook: 'joynal.official',
    instagram: 'jo_jo.503',
    youtube: 'joynalbokhsho', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://joynalbokhsho.com',
    phone: '',
    email: 'mail@joynalbokhsho.com',
  },
  resume: {
    fileUrl:
      'https://cdn.discordapp.com/attachments/860390018936602644/1105978407772246158/Joynal_Abedin_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'BD ZONE',
      position: 'Owner',
      from: 'April 2018',
      to: 'Present',
      companyLink: 'https://bdzonemc.com',
    },
    {
      company: 'Ababhil',
      position: 'Video Editor',
      from: 'April 2022',
      to: 'January 2023',
      companyLink: '',
    },
    {
      company: 'Kamrul Traders',
      position: 'IT Manager',
      from: 'June 2018',
      to: 'January 2022',
      companyLink: 'https://kamrultraders.com',
    },
  ],
  //certifications: [
  //  {
  //    name: '',
  //    body: '',
  //    year: '',
  //    link: '',
  //  },
  //],
  educations: [
    {
      institution: 'Firoz Miah Government College',
      degree: 'Intermediate',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Panishwar High School',
      degree: 'JSC, SSC',
      from: '2013',
      to: '2019',
    },
    {
      institution: 'Sholabari Government Primary School',
      degree: 'PSC',
      from: '2012',
      to: '-',
    },
    {
      institution: 'Panishwar Kindergarten',
      degree: '-',
      from: '-',
      to: '-',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 69, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Assalamu Alaikum`,

  enablePWA: true,
};

export default CONFIG;
