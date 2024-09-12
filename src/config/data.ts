export const data: Resume = {
  profile: {
    name: "Hans Yulian",
    phone: "+628112312107",
    email: "hansyulian@windowslive.com",
    address: "Bandung, West Java, Indonesia",
    title: "Senior Software Engineer",
    summary:
      "Accomplished and versatile software engineer with extensive experience across a diverse array of technologies. Expert in developing robust solutions and adept at navigating complex technical landscapes. A proven track record of delivering high-quality software products efficiently and effectively.",
    printOnlyHeading:
      "This CV is built using React as a part of skill demonstration of Hans Yulian. The online version of this CV is available in https://hansyulian.github.io/ and repository url is https://github.com/hansyulian/cv",
  },
  experiences: [
    {
      title: "Freelance Architect",
      company: "FXI Solutions Sdn. Bhd.",
      location: "Malaysia",
      remote: true,
      start: {
        year: 2024,
        month: 2,
      },
      end: {
        year: 2024,
        month: 5,
      },
      projects: [
        {
          name: "Voyager Quotation & Sales System",
        },
      ],
      description: [
        "Developed a high-fidelity sales order system for Voyager’s e-commerce site.",
        "Implemented web app features using React and TypeScript for the front-end.",
        "Ensured precise execution of Figma designs within the specified design specs.",
        "Utilized C# and .NET Core 8 for back-end functionality.",
      ],
      technologies: ["React", "TypeScript", "C#", ".NET Core 8", "Figma"],
    },
    {
      title: "Senior Software Engineer Lv. 3",
      company: "Cake Group Pte. Ltd.",
      location: "Singapore",
      remote: true,
      start: {
        year: 2021,
        month: 1,
      },
      end: {
        year: 2023,
        month: 11,
      },
      projects: [
        {
          name: "Bake iOS & Android Mobile App",
          urls: [
            "https://play.google.com/store/apps/details?id=com.cakedefi.app",
            "https://apps.apple.com/me/app/bake-formerly-cake-defi/id1564415526",
          ],
        },
        {
          name: "Bake Website",
          urls: ["https://bake.io"],
        },
        {
          name: "Bake WebApp",
          urls: ["https://app.bake.io"],
        },
      ],
      description: [
        "Architected the mobile app software architecture.",
        "Performed code reviews and ensured high code quality.",
        "Engineered accurate design implementations from Figma.",
        "Implemented unit testing using Jest.",
      ],
      achievements: [
        "Recruited early by U-Zyn Chua, CTO of Cake, due to a need for React Native mobile development expertise.",
        "Successfully launched the first version of the Bake mobile app within 6 months as part of a team of 3 in July 2021.",
        "Pioneered the mobile app development for Cake.",
      ],
      technologies: [
        "React",
        "React Native",
        "TypeScript",
        "Figma",
        "Redis",
        "PostgreSQL",
        "Jest",
      ],
    },
    {
      title: "Senior Consultant",
      company: "Zynesis Pte. Ltd.",
      location: "Singapore",
      remote: true,
      start: {
        year: 2018,
        month: 9,
      },
      end: {
        year: 2020,
        month: 12,
      },
      projects: [
        {
          name: "Sparrow Exchange Backend",
          urls: ["https://www.sparrowexchange.com"],
        },
        {
          name: "Cakepool",
          description: "The initial version of the Cake platform.",
          urls: ["https://bake.io"],
        },
        {
          name: "Bahamas Central Bank Digital Currency",
          urls: ["https://www.sanddollar.bs/"],
        },
      ],
      description: [
        "Architected back-end, front-end, and mobile software architectures.",
        "Implemented unit testing using Jest.",
        "Worked closely with designers to ensure design fidelity.",
      ],
      achievements: [
        "Established a robust architecture for both back-end and front-end systems.",
        "Pioneered mobile app development using React Native.",
        "Created a bridge for designers to implement designs directly on the platform.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "GraphQL",
        "React Native",
        "SCSS",
        "Jest",
      ],
    },
    {
      title: "Part-time Freelancer",
      company: "Nanuru Design",
      location: "Netherlands",
      remote: true,
      start: {
        year: 2017,
      },
      end: {
        year: 2023,
      },
      projects: [
        {
          name: "Equis Marketing Portal",
          urls: ["https://deltahorses.nl/en/"],
        },
        {
          name: "Equis Mobile App",
        },
        {
          name: "SRI-plastics ERP Solution",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "React",
        "GraphQL",
        "Next.js",
        "TypeScript",
        "React Native",
        "Neo4j",
        "Elastic Search",
      ],
    },
    {
      title: "Senior Consultant",
      company: "Fusionex International Sdn. Bhd.",
      location: "Malaysia",
      remote: false,
      start: {
        year: 2016,
        month: 3,
      },
      end: {
        year: 2018,
        month: 9,
      },
      projects: [
        {
          name: "Malaysia Digital Free Trade Zone Platform",
          description: "E-PAM system for the Malaysian Government.",
        },
        {
          name: "GIANT Analytics Advanced Analytics",
          description:
            "Developed an auto model generator using machine learning microservice module with H2O.ai and Python.",
        },
        {
          name: "GIANT Form Engine",
          description:
            "Created a form builder to design and input data into GIANT Analytics.",
        },
        {
          name: "GIANT Marketing Portal",
          description: "Developed a marketing portal for GIANT Analytics.",
        },
      ],
      description: [
        "Guided juniors and interns through development technologies.",
        "Designed software architecture for various projects.",
        "Reviewed code produced by other developers.",
        "Collaborated closely with solution architects to build robust software architectures.",
      ],
      technologies: [
        "PHP",
        "Python",
        "Laravel",
        "C#",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "RabbitMQ",
      ],
      achievements: [
        "Promoted to Senior Consultant with only 6 months of professional experience.",
      ],
    },
    {
      title: "Consultant",
      company: "Fusionex International Sdn. Bhd.",
      location: "Malaysia",
      remote: false,
      start: {
        year: 2015,
        month: 9,
      },
      end: {
        year: 2016,
        month: 3,
      },
      projects: [
        {
          name: "Malaysia Open Data Platform",
          urls: ["https://data.gov.my/"],
        },
      ],
      description: [
        "Collaborated closely with senior consultants and solution architects.",
        "Implemented designs provided by designers.",
      ],
      technologies: ["Laravel", "CKAN", "PHP", "CSS", "JavaScript", "HTML"],
    },
  ],

  skills: [
    {
      name: "Typescript",
      level: 9,
      periods: [
        {
          start: {
            year: 2019,
          },
        },
      ],
    },
    {
      name: "Javascript",
      level: 9,
      periods: [
        {
          start: {
            year: 2012,
          },
        },
      ],
    },
    {
      name: "React",
      level: 9,
      periods: [
        {
          start: {
            year: 2019,
          },
        },
      ],
    },
    {
      name: "React-Native",
      level: 8,
      periods: [
        {
          start: {
            year: 2020,
          },
        },
      ],
    },
    {
      name: "HTML",
      level: 9,
      periods: [
        {
          start: {
            year: 2012,
          },
        },
      ],
    },
    {
      name: "CSS",
      level: 9,
      periods: [
        {
          start: {
            year: 2012,
          },
        },
      ],
    },
    {
      name: "Next.js",
      level: 5,
      periods: [
        {
          start: {
            year: 2022,
          },
          end: {
            year: 2023,
          },
        },
      ],
    },
    {
      name: "Elastic Search",
      level: 4,
      periods: [
        {
          start: {
            year: 2017,
          },
          end: {
            year: 2018,
          },
        },
      ],
    },
    {
      name: "Neo4j",
      level: 3,
      periods: [
        {
          start: {
            year: 2017,
          },
          end: {
            year: 2018,
          },
        },
      ],
    },
    {
      name: "LESS",
      level: 6,
      periods: [
        {
          start: {
            year: 2017,
          },
          end: {
            year: 2018,
          },
        },
      ],
    },
    {
      name: "SCSS",
      level: 7,
      periods: [
        {
          start: {
            year: 2019,
          },
        },
      ],
    },
    {
      name: "Git",
      level: 8,
      periods: [{ start: { year: 2015 } }],
    },
    {
      name: "GraphQL",
      level: 5,
      periods: [{ start: { year: 2017 }, end: { year: 2023 } }],
    },
    {
      name: "PostgreSQL",
      level: 8,
      periods: [
        {
          start: {
            year: 2015,
          },
        },
      ],
    },
    {
      name: "Docker",
      level: 7,
      periods: [{ start: { year: 2017 } }],
    },
    {
      name: "uBuntu Server",
      level: 8,
      periods: [{ start: { year: 2017 } }],
    },
    {
      name: "MySQL",
      level: 6,
      periods: [
        {
          start: {
            year: 2012,
          },
        },
      ],
    },
    {
      name: "MongoDB",
      level: 7,
      periods: [
        {
          start: {
            year: 2017,
          },
          end: {
            year: 2018,
          },
        },
      ],
    },
    {
      name: "C++",
      level: 4,
      periods: [
        {
          start: {
            year: 2010,
          },
          end: {
            year: 2013,
          },
        },
      ],
    },
    {
      name: "Pascal",
      level: 3,
      periods: [
        {
          start: {
            year: 2008,
          },
          end: {
            year: 2010,
          },
        },
      ],
    },
    {
      name: "Java",
      level: 6,
      periods: [
        {
          start: {
            year: 2012,
          },
          end: {
            year: 2015,
          },
        },
        {
          start: {
            year: 2017,
          },
          end: {
            year: 2017,
          },
        },
      ],
    },
    {
      name: "PHP",
      level: 6,
      periods: [
        {
          start: {
            year: 2014,
          },
          end: {
            year: 2017,
          },
        },
      ],
    },
    {
      name: "Laravel",
      level: 6,
      periods: [
        {
          start: {
            year: 2014,
          },
          end: {
            year: 2017,
          },
        },
      ],
    },
    {
      name: "Python",
      level: 7,
      periods: [
        {
          start: {
            year: 2017,
          },
          end: {
            year: 2018,
          },
        },
      ],
    },
    {
      name: "C#",
      level: 5,
      periods: [
        {
          start: {
            year: 2016,
          },
          end: {
            year: 2018,
          },
        },
        {
          start: {
            year: 2024,
            month: 3,
          },
          end: {
            year: 2024,
            month: 5,
          },
        },
      ],
    },
  ],
  onlineLinks: [
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/hans-yulian-84b68090",
    },
    {
      type: "github",
      url: "https://github.com/hansyulian",
    },
    {
      type: "telegram",
      url: "https://t.me/hansyulian",
    },
  ],
  languages: [
    {
      language: "Indonesian",
      proficiency: "native",
    },
    {
      language: "English",
      proficiency: "professional",
    },
  ],
  professionalReferences: [
    {
      name: "U-Zyn Chua",
      designation:
        "CTO of Cake Group Pte. Ltd & Principal Consultant of Zynesis Pte. Ltd.",
      email: "uzyn@zynesis.com",
      phone: "+6598318407",
    },
    {
      name: "Gan Chun How",
      designation:
        "Senior Solution Architect of Fusionex International Sdn. Bhd.",
      phone: "+60123211867",
    },
  ],
  educations: [
    {
      institution: "Institut Teknologi Harapan Bangsa",
      location: "Indonesia",
      start: {
        year: 2012,
        month: 8,
      },
      end: {
        year: 2015,
        month: 5,
      },
      degree: "Bachelor of Science",
      verdict: "GPA: 3.96/4.00",
      description: [
        "Graduated as the top student of ITHB in 2015.",
        "Completed an accelerated 3-year program.",
        "Awarded scholarships for academic excellence over 5 semesters.",
        "Achieved the highest GPA in the graduation year 2015.",
        "Recorded the highest GPA in the Computer Science department at ITHB.",
      ],
    },
  ],
  notableAccomplishments: [
    "Achieved a TOEFL iBT score of 97 in February 2018.",
    "Achieved a TOEFL PBT score of 583 in April 2015.",
    "Engaged in competitive programming practice during high school: http://uhunt.felix-halim.net/id/78903.",
    "Awarded 1st Consolation Winner at the Kompetisi Pemrograman UGM 2011, an informatics competition for high school students.",
    "Awarded 1st Place in the ITB Akravidia Programming Contest 2011, an informatics competition for high school students.",
    "Awarded 2nd Place in the ITHB IECCC 2010, an informatics competition for high school students.",
    "Awarded 3rd Place in the ITHB IECCC 2009, an informatics competition for high school students.",
    "Awarded 2nd Place in the Kompetisi Pengetahuan Umum SMA Santo Aloysius 2008, a general knowledge competition for middle school students.",
    "Awarded 3rd Place in the Kompetisi Matematika UPI 2007, a mathematics competition for middle school students.",
    "Instructor for iOS programming training (March 2015), an event organized by ITHB to introduce programming basics to high school students at SMA Santa Angela Bandung.",
    "Chairman of the Academic and Profession Division in the Informatics Engineering Community, a student council body at ITHB for the 2014-2015 term.",
    "Instructor for iOS programming training (February 2014), part of an ITHB event to introduce programming basics to high school students at SMA Santa Angela Bandung.",
    "Chairman of the Windows Phone Workshop at ITHB (December 2013), an event organized by the Informatics Engineering Community to provide an overview of Windows Phone programming. The event was attended by around 30 students and 5 lecturers from ITHB’s Wireless Mobile Computing course.",
    "Chairman of the PhoneGap Workshop at ITHB (December 2013), an event that introduced cross-platform mobile programming frameworks, attended by around 40 ITHB students.",
    "Instructor at the Bandung Informatics Olympiad (April 2013), an event organized by MGMP TIK to prepare high school students for the city-level National Science Olympiad. The event included around 50 participants from various schools in Bandung, focusing on informatics training.",
  ],
  portfolios: [
    {
      title: "Online Resume/CV",
      description:
        "Source code repository for this interactive CV, showcasing my personal website and technical skills.",
      urls: [
        "https://hansyulian.github.io",
        "https://github.com/hansyulian/cv",
      ],
    },
    {
      title: "HAuthenticator",
      description:
        "A custom TOTP (Time-based One-Time Password) mobile app built with React Native, developed as a personal alternative to Google Authenticator.",
      urls: ["https://github.com/hansyulian/hauthenticator"],
    },
    {
      title: "Home Dashboard",
      description:
        "A desktop app built with Flutter, designed to act as a personal home dashboard running 24/7 on a Raspberry Pi for home automation and monitoring.",
      urls: ["https://github.com/hansyulian/home-dashboard"],
    },
    {
      title: "Voyager Site",
      description:
        "A web project for FXI Solutions Sdn. Bhd. completed in 2024 as a freelance developer, delivering a high-quality web solution.",
      urls: ["https://voyager.v-circle.com"],
    },
    {
      title: "Bake Mobile App",
      description:
        "A mobile application developed in React Native during my tenure at Cake Group Pte. Ltd., providing users with access to cryptocurrency invvestment and DeFi services.",
      urls: [
        "https://play.google.com/store/apps/details?id=com.cakedefi.app",
        "https://apps.apple.com/me/app/bake-formerly-cake-defi/id1564415526",
      ],
    },
    {
      title: "Bake WebApp",
      description:
        "A responsive web application built with React during my time at Cake Group Pte. Ltd., offering a seamless cryptocurrency investment platform experience for users.",
      urls: ["https://bake.io"],
    },
    {
      title: "Bake Website",
      description:
        "A marketing website built using React at Cake Group Pte. Ltd., focused on promoting cryptocurrency investment products and services to a global audience.",
      urls: ["https://bake.io"],
    },
    {
      title: "Sparrow Exchange Backend",
      description:
        "Backend development for Sparrow Exchange using Express.js, completed during my role at Zynesis Pte. Ltd. to support a secure option smart contract exchange.",
      urls: ["https://www.sparrowexchange.com"],
    },
    {
      title: "Bahamas Central Bank Digital Currency",
      description:
        "Developed a digital currency platform for the Central Bank of The Bahamas using React, React Native, and Express.js while at Zynesis Pte. Ltd.",
      urls: ["https://www.sanddollar.bs/"],
    },
    {
      title: "Equis Delta Horses Marketing Portal",
      description:
        "A marketing portal for Equis Delta Horses, developed using Handlebars, LESS, and Gulp as part of a freelance project with Nanuru Design.",
      urls: ["https://deltahorses.nl/en"],
    },
    {
      title: "Malaysia Open Data Platform",
      description:
        "Developed Malaysia's official open data platform using Laravel and CKAN during my time at Fusionex International Sdn. Bhd., facilitating public data access provided by government.",
      urls: ["https://data.gov.my/"],
    },
  ],
};
