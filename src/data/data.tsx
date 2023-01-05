import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import fitnessImg from '../images/portfolio/fitnessApp.png';
import objectDetection from '../images/portfolio/objectDetection.png';
import tinyURLImg from '../images/portfolio/tinyURL.png';
import fitnessImg from '../images/portfolio/fitnessApp.png';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/sea.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hangfan Liu - Resume',
  description: "Hangfan Liu - Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hangfan Liu.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a <strong className="text-stone-100">software engineer</strong>, Ex-Shopee Engineer, Ex-DIDI Engineer.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Currently, I am a Master of <strong className="text-stone-100">Computer Science</strong> student in California.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://github.com/liuhangfan/Resume/blob/main/Hangfan_Liu_Software_Engineer.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm interested in Backend, Java, Golang, database, AI, Frontend, and distributed stuff. 
  For the rest of the time, I enjoy traveling and photography.`,
  aboutItems: [
    {label: 'Location', text: 'Los Angeles, CA, USA', Icon: MapIcon},
    {label: 'Graduate', text: '2024(expected)', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Traveling, Photography', Icon: SparklesIcon},
    {label: 'Study', text: 'Loyola Marymount University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Shopee Pte. Ltd.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English, Chinese, Germnay',
        level: 10,
      },
      // {
      //   name: 'Chinese',
      //   level: 10,
      // },
      // {
      //   name: 'Germany',
      //   level: 6,
      // },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Golang, Java, Python, C#, Java Script, HTML, CSS, Node.js, React.js',
        level: 9,
      },
      // {
      //   name: 'Java',
      //   level: 8,
      // },
      // {
      //   name: 'Python',
      //   level: 6,
      // },
    ],
  },
  {
    name: 'Technologies',
    skills: [
      {
        name: 'Kafka, Redis, MySQL, HBase, MongoDB, Crawler, Spring boot, gRPC, ProtoBuf, ZooKeeper',
        level: 8,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Git, AWS, JIRA, Postman, Linux, Docker',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Tiny URL',
    description: 'A full stack tiny url service.',
    url: 'https://www.21tiny.com',
    image: tinyURLImg,
  },
  {
    title: 'Fitness App',
    description: 'fitness tutorial website',
    url: 'https://main.d30kuwgs7lhjlv.amplifyapp.com/',
    image: fitnessImg,
  },
  {
    title: 'Computer Vision',
    description: 'Object Detection in Traffic',
    url: 'https://github.com/liuhangfan/object-detection-in-traffic',
    image: objectDetection,
  },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://github.com/liuhangfan',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://github.com/liuhangfan',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://github.com/liuhangfan',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://github.com/liuhangfan',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://github.com/liuhangfan',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://github.com/liuhangfan',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://github.com/liuhangfan',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://github.com/liuhangfan',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2024',
    location: 'Loyola Marymount University',
    title: 'Masters of Computer Science',
    content: <p></p>,
  },
  {
    date: 'September 2020',
    location: 'Technical University of Kaiserslautern',
    title: 'Bachelor of Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Augest 2021 - Augest 2022',
    location: 'Shopee',
    title: 'Software Engineer',
    content: (
      <p>
        Developed end-to-end distributed crawler system using Golang. Our services update at least 500 million records per week.

Massive amounts of competitive data provide benefits to data science, operations, and seller teams.
      </p>
    ),
  },
  {
    date: 'December 2020 - April 2021',
    location: 'DIDI',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Developed end-to-end ETL (Extract-Transform-Load) for real-time trajectory raw data, which involves data cleaning, computing, formatting, etc. Developed web application using SpringBoot framework in Scala.
      </p>
    ),
  },
  {
    date: 'february 2020 - May 2020',
    location: 'DFKI',
    title: 'Computer Vision Engineer Intern',
    content: (
      <p>
        Researched and developed object detection in AR. Designed a novel conventional neural network architecture.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out and see what I\'m up to now.',
  items: [
    {
      type: ContactType.Email,
      text: 'liuhangfan27@gmail.com',
      href: 'mailto:liuhangfan27@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Los Angeles, CA, USA',
      href: 'https://www.google.com/maps/place/Los+Angeles,+CA/@34.0201613,-118.6919224,10z',
    },
    {
      type: ContactType.Github,
      text: 'liuhangfan',
      href: 'https://github.com/liuhangfan',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/liuhangfan'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hangfan-liu-5215601b3'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  //{label: 'Twitter', Icon: , href: 'https://twitter.com/TimBakerx'},
];
