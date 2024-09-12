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
      "This CV is built using React as a part of skill demonstration of Hans Yulian. The online version of this CV is available in https://github.com/hansyulian/cv and repository url is https://github.com/hansyulian/cv",
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
        "Developed high-fidelity sales order system for Voyager’s e-commerce site.",
        "Implemented web app features using React and Typescript for front-end.",
        "Ensured precise execution of Figma designs within design specs.",
        "Utilized C# and .NET Core 8 for backend functionality.",
      ],
      technologies: ["React", "Typescript", "C#", ".Net Core 8", "Figma"],
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
        "Architected mobile app software architecture",
        "Performed code review",
        "Engineered an acurate design from Figma",
        "Implemented unit testing using Jest",
      ],
      achievements: [
        "U-Zyn Chua as the owner of Zynesis and CTO of Cake moved me from Zynesis to Cake early than the other team member because of the need of react native mobile development for Cake.",
        "Launched the first version of Bake mobile app within 6 months of development as a team of 3 people in July 2021",
        "Pioneered the mobile app development of Cake",
      ],
      technologies: [
        "React",
        "React-Native",
        "Typescript",
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
          urls: ["https://www.sparrowexchange.com/"],
        },
        {
          name: "Cakepool",
          description: "The initial version of Cake",
          urls: ["https://bake.io"],
        },
        {
          name: "Bahamas Central Bank Digital Currency",
          urls: ["https://www.sanddollar.bs/"],
        },
      ],
      technologies: [
        "React",
        "Typescript",
        "GraphQL",
        "React-Native",
        "SCSS",
        "Jest",
      ],
      description: [
        "Architected back-end, front-end, and mobile software architecture",
        "Implemented unit testing using Jest",
        "Work closesly with designer",
      ],
      achievements: [
        "Established a robust architecture for backend and front-end",
        "Pioneered the mobile-app development using React-Native",
        "Created an architecture bridge that allow designer to implement design directly on the platform",
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
          name: "SRI-plastics ERP solution",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "React",
        "GraphQL",
        "Next.js",
        "Typescript",
        "React-Native",
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
          description: "E-PAM system for Malaysia Government",
        },
        {
          name: "GIANT Analytics Advanced Analytics",
          description:
            "An auto model generator using machine learning microservice module using H20.ai and Python",
        },
        {
          name: "GIANT Form Engine",
          description:
            "A form builder that will allow user to design form and directly input their data in GIANT Analytics",
        },
        {
          name: "GIANT Marketing Portal",
          description: "A marketing portal for GIANT Analytics",
        },
      ],
      description: [
        "Guided juniors & interns through technologies used in development",
        "Designer software architecture for projects",
        "Reviewed code made by other developers",
        "Work closely with solution architects to build a robust software architecture",
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
        "Get promoted to Senior Consultant with just 6 months professional experience",
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
        { name: "Malaysia Open Data Platform", urls: ["https://data.gov.my/"] },
      ],
      description: [
        "Work closely with senior consultant and senior solution architect",
        "Implemented design provided by designer",
      ],
      technologies: ["Laravel", "CKAN", "PHP", "CSS", "Javascript", "HTML"],
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
      level: 6,
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
      verdict: "GPA 3.96/4.00",
      description: [
        "Best graduate of ITHB 2015",
        "Fastest graduate of: 3 years accelerated program",
        "Received 5 semester of scholarships for academic performance",
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
};
