import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bruce Wyatt",
  initials: "BW",
  url: "https://onscroll.tech",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Software engineer and freelance shopify Developer. I love experimenting with code. Learning to build AI agents is my current quest.",
  summary:
    "I am currently working on my capstone for my PostGrad Certificate at Humber Polytechnic building a shopify app using Remix. My background is into Psychology and technology and I am also a STEM instructor teaching kids 4-17 yrs old how to code",
  avatarUrl: "/gitpp.png",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Placathose",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bruce-ww/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Onscroll_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@wyattonscroll6245",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Code Ninja",
      href: "https://www.codeninjas.com/leaside-on-ca",
      badges: [],
      location: "On site",
      title: "Software Developer",
      logoUrl: "/codeninja.png",
      start: "May 2025",
      end: "Present",
      descriptions: [
        "Working on new tools for streamlining operations and increase teacher's productivity ",
        "point 2",
        "point 3"
      ]
    },
    {
      company: "theOhCollective",
      href: "https://theohcollective.com/",
      badges: [],
      location: "Remote",
      title: "Freelance Shopify Developer",
      logoUrl: "/ohcollective.webp",
      start: "Mar 2024",
      end: "Dec 2024",
      descriptions: [
        "Customized the theme of the storefront and admin panel accordingly to the merchant's business need using liquid and javascript",
        "wefwejo",
      ]
    },
    {
      company: "Cobo Academy",
      href: "https://coboacademy.com/",
      badges: [],
      location: "Remote",
      title: "Coding Instructor",
      logoUrl: "/cobologo.jpeg",
      start: "Nov 2023",
      end: "Sep 2024",
      descriptions:[
        "tbc",
      ]
    },
    {
      company: "Depths",
      href: "https://depths.so",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/depths.jpeg",
      start: "May 2022",
      end: "Aug 2022",
      descriptions:[
        "tbc",
      ]
    },
    
  ],
  education: [
    {
      school: "Humber Polytechnic",
      href: "https://mediaarts.humber.ca/programs/web-development.html",
      degree: "Post Graduate in Web Development",
      logoUrl: "/humber.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "The Education University of Hong Kong",
      href: "https://www.eduhk.hk/en/",
      degree: "Bachelor's Degree of Psychology",
      logoUrl: "/eduhk.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Next-Bites",
      href: "https://github.com/Placathose/humber-bites-rn",
      dates: "Jan 2025 - April 2025",
      active: true,
      description:
        "I build a web application that allow students to allocate time for cooking their meal and have a AI nutritionist helping them to eat better",
      technologies: [
        "React-Native",
        "Next.js",
        "Typescript",
        "Firebase"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Placathose/humber-bites-rn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/humberbite.jpeg",
      video:
        "",
    },
    {
      title: "Zara Clone",
      href: "https://github.com/Placathose/ts-zara-mern",
      dates: "April 2025 - Present",
      active: true,
      description:
        "Rebuilding an ecommerce platform for Zara from the ground up",
      technologies: [
        "Typescript",
        "MERN",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Placathose/ts-zara-mern",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zara.png",
      video: "",
    },
    {
      title: "Scratch2Lesson",
      href: "",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Developing a saas that allow STEM instructors to turn their scratch projects into a Lesson PPT and a worksheet using openAI api",
      technologies: [
        "Next.js",
        "Typescript",
        "supabase"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Placathose",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/scratch.webp",
      video: "",
    },
    {
      title: "Shopify Store Bundle",
      href: "",
      dates: "April 2025 - Present",
      active: true,
      description:
        "Developing a shopify store bundle app using remix",
      technologies: [
        "Remix",
        "Prisma",
        "GraphQL"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Placathose",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shopify.png",
      video:
        "",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Php", "HTML/CSS", "Python", "SQL", "C#"],
      image: "/"
    },
    {
      category: "Framework/Libraries",
      skills: ["Nextjs", "Remix", "React", "React Native", "Node.js", "Express.js", "Laravel", ".NET"],
      image: "/"
    },
    {
      category: "Tools",
      skills: ["Git and GitHub", "MongoDB", "Docker", "Firebase", "AWS", "ShopifyCLI", "Wordpress", "Figma"],
      image: "/"
    }
  ],
} as const;
