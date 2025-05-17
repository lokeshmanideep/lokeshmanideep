/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Lokesh's Portfolio",
  description:
    "A passionate individual dedicated to building scalable applications, solving complex problems, and creating user-friendly experiences.",
  og: {
    title: "Lokesh Manideep Portfolio",
    type: "website",
    //TODO: Change this later
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Lokesh Manideep Boggavarapu",
  logo_name: "Lokesh Manideep",
  nickname: "",
  subTitle:
    "A passionate individual dedicated to building scalable applications, solving complex problems, and creating user-friendly experiences.",
  resumeLink:
    //Change this later
    "https://drive.google.com/file/d/1LzjRTzI3fgaxH8pk-VgyKZyIs978QMca/view?usp=drive_link",
  portfolio_repository: "https://github.com/lokeshmanideep/masterPortfolio",
  githubProfile: "https://github.com/lokeshmanideep",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/lokeshmanideep",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lokesh-manideep-b0957412b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:lokeshmanideep14@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing iOS mobile applications using UIKit",
        "⚡ Creating application backend in Node, Flask and Spring",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#8BC34A",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Implementing serverless architecture using AWS Lambda and API Gateway",
        "⚡ Implementing CI/CD pipelines using tools like Jenkins, Github Actions",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Fine-tuning of large language models for real-world applications, optimizing performance for specific use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Optimizing quantitative models for dynamic forecasting, time series analysis, and predictive analytics",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com//lokeshmanideep/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Illinois Chicago",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "University of Illinois Chicago",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ I have explored a diverse range of courses in Data Science and Machine Learning, along with hands-on experience in Linux Kernel Programming and Neural Networks.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on areas like fine-tuning large learning models for real-world applications, optimizing performance for specific use cases.",
      ],
      website_link: "https://www.uic.edu/",
    },
    {
      title: "National Institute of Technology Karnataka",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "NITK",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I was an active member of the Fest Club, where I took on a leadership role in organizing and managing entire carnival events, ensuring its successful execution from start to finish",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college.",
      ],
      website_link: "https://www.nitk.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with various organizations, from startups to large enterprises, and have gained experience in developing software applications, managing cloud infrastructure.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Graduate Research Assistant",
          company: "University of Illinois Chicago",
          company_url: "https://www.uic.edu/",
          logo_path: "iu_logo.png",
          duration: "Aug 2024 - Present",
          location: "Chicago, IL, USA",
          description:
            "I am working on fine-tuning large language models for real-world applications, optimizing performance for specific use cases. I am also working on optimizing quantitative models for dynamic forecasting, time series analysis, and predictive analytics.",
          color: "#000000",
        },
        {
          title: "Software Development Engineer II",
          company: "Oravel Stays Pvt. Ltd. (OYO Rooms)",
          company_url: "https://www.oyorooms.com/",
          logo_path: "oyo_logo.png",
          duration: "Jun 2023 - Dec 2023",
          location: "Gurgaon, Haryana",
          description:
            "I developed the pre-production and testing environments for OYO Vacation Homes' backend systems. I also Mmanaged the smooth transfer of data and services during OYO's acquisition of TUI, ensuring continuity and efficiency",
          color: "#0879bf",
        },
        {
          title: "Software Development Engineer I",
          company: "Oravel Stays Pvt. Ltd. (OYO Rooms)",
          company_url: "https://www.oyorooms.com/",
          logo_path: "oyo_logo.png",
          duration: "Jun 2023 - Dec 2023",
          location: "Gurgaon, Haryana",
          description:
            "I played a key role in the migration of OYO Vacation Homes' backend, supporting 10+ services, from on-premises infrastructure to Azure Cloud.I also onboarded new partners to the OYO Vacation Homes platform by integrating their inventory, pricing, and booking systems into the OVH infrastructure, enabling seamless business growth.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "WIPRO",
          company_url: "https://www.wipro.com/",
          logo_path: "wipro_logo.svg",
          duration: "May 2019 - July 2019",
          location: "Bangalore, Karnataka",
          description:
            "Contributed to a project focused on developing compliance measures for IoT devices using AWS IoT, ensuring privacy policy adherence and enhancing data security through various AWS services.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Health Volunteer",
          company: "UI Health",
          company_url: "https://hospital.uillinois.edu/",
          logo_path: "ui_health_logo.png",
          duration: "Jul 2024 - Present",
          location: "Chicago, IL, USA",
          description:
            "I am working as a health volunteer at UI Health. I am responsible for helping patients in their daily activities and providing them with the necessary care.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_pic.png",
    description:
      "You can contact me through LinkedIn or Email, I will reply within 24 hours. I can help you with React, Spring, Cloud and iOS App Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in my career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@lokeshmanideep14",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "South Oakley Blvd, Chicago, IL, USA 60612",
    locality: "Chicago",
    country: "USA",
    region: "Illinois",
    postalCode: "60612",
    streetAddress: "South Oakley Blvd",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  certifications,
  competitiveSites,
  contactPageData,
  degrees,
  experience,
  greeting,
  projectsHeader,
  publications,
  publicationsHeader,
  seo,
  settings,
  skills,
  socialMediaLinks,
};
