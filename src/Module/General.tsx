import hackathonLogo from './Assets/logo.svg';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Join DA Hacks',
  Typed_effect: ['2 days of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us on June 7th and 8th, 2024 with over 100 other FHDA students for 2 days of creation, innovation, and fun.',
  IMG_SRC: boy,
  DISCORD_LINK: 'https://discord.gg/nzzTpbUV',
  JUDGES_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://docs.google.com/forms/d/1wjtvwe0lvwZG1k31KVZjOiKGvsF3oVw3IdIokwsXXIg/edit'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/deanzahacks/',
  discord: 'https://discord.gg/nzzTpbUV',
  linkedin: '',
  twitter: '',
  devpost: '', // FIXME: add devpost link when finished
  email: 'mailto:deanzadevelopers@gmail.com',
  mail: 'deanzadevelopers@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is DA Hacks?',
  LONG_DESCRIPTION:
    'DA Hacks is a highly anticipated two-day student-run hackathon, catering exclusively to college students in the vibrant Bay Area. Our mission is to create an unforgettable experience for participants, offering a rich and diverse program that encompasses engaging workshops, enlightening sessions led by industry experts, opportunities to connect with like-minded peers who share a passion for computer science, and the chance to hone their coding skills in a supportive, stress-free environment. In the previous edition of DA Hacks, we proudly welcomed over 70 enthusiastic attendees, with an impressive 120 signups. As we continue to grow and evolve, we look forward to setting new milestones and providing an even more enriching experience for our participants.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: false,
    src: ''
  },
  JOIN_TEAM: {
    required: false,
    src: ''
  },
  Privacy_policy: {
    required: false,
    src: ''
  },
  Terms_of_use: {
    required: false,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros), this is day-month-year
 */

const calenderStartingDate = {
  month: 6,
  year: 2024
};

const schedule = [
  {
    day: '8-6-2024',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-6-2024',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '3-6-2024',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-6-2024',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '2-6-2024',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Overall First',
      content:
        'A first overall prize of $200 will be given to a project that stands out among all other submissions!'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'Overall Second',
      content:
        'Second overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Overall Third',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Best Beginner Hack',
      content: 'Your project will qualify for this category if atleast 50% '
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Project with most creative designs will be UI/UX track'
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: 'Best Web App with Qoom',
      content: 'Must use qoom in your project to win this category'
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: 'https://github.com/Limbo-Hacks/Hackathon-website-template',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Erika',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is like a creative marathon for tech enthusiasts! DA Hacks is great for first timers or returners looking to experience inspiring guest speakers, helpful workshops, tons of skilled mentors, and, of course, fun games and cool swag.'
      },
      {
        label: 'When and where is DA Hacks?',
        content:
          'DA Hacks is from June 7 - 8 at De Anza College. Exact location on campus will be announced soon, together with the schedule! This is not an overnight event.'
      },
      {
        label: 'Does it cost money to attend?',
        content:
          'No need to break the bank to join in on the hacking fun! DA Hacks is absolutely FREE to attend. We believe in making tech innovation accessible to everyone.'
      },
      {
        label: 'Are there prizes?',
        content:
          'There will be prizes and swag for First, Second, and Third place. Others include Best Beginner Hack, Best Hardware Hack, Most Entertaining Hack, and Best Design.'
      }
    ],
    [
      {
        label: 'Is it beginner friendly?',
        content:
          "Don't sweat! DA Hacks welcomes hackers of all levels, whether you're a coding prodigy or just dipping your toes into the world of hacking. We'll have workshops and mentors to help you along the way, so you can learn, create, and have a blast!"
      },
      {
        label: 'How do teams work?',
        content:
          'Teams can have up to 4 members. You can either form a team before hand and come to the event or make teammates at the event. We will be having a team making session. You can also choose to be alone if you wish to!'
      },
      {
        label: "What if I don't have a team?",
        content:
          "No team? No problem! Leading up to our event, you can meet new people through our hacker Discord. We'll have team formation events at the beginning of the hackathon geared towards helping you find people to work with."
      },
      {
        label: 'I still have questions!',
        content:
          "Feel free to reach out to our friendly DA Hacks team through our social media or Discord channels. We're here to help, and we're just as excited as you are :D"
      }
    ]
  ]
];

export {
  calenderStartingDate,
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  MIDDLE_SECTION,
  Prizeinfo,
  schedule,
  SOCIALS,
  sponsorLogos,
  TeamInfo,
  TOP_SECTION
};
