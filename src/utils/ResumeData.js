import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import angularIcon from "../assets/images/skills/angular.svg";
import ionicIcon from "../assets/images/skills/ionic.svg";
import bootstrapIcon from "../assets/images/skills/bootstrap.svg";
import reactIcon from "../assets/images/skills/react.svg";
import typescriptIcon from "../assets/images/skills/typescript.svg";
import javascriptIcon from "../assets/images/skills/javascript.svg";
import githubIcon from "../assets/images/skills/github.svg";
import magentoIcon from "../assets/images/skills/magento.svg";
import nextIcon from "../assets/images/skills/nextjs.svg";

const ResumeData = {
  name: "Hussain Manasawala",
  title: "Web/Mobile App Developer",
  birthday: "22nd July 1997",
  email: "manasawala_hussain@yahoo.com",
  job: "Tata Consultancy Services",
  phone: "+91 9920973313",
  about_title: "Hi, I am Hussain. Nice to meet you!",
  about:
    "You can also call me an Innovative Frontend Developer. Someone who loves to build scalable and maintainable Web and Mobile Apps. I don't define myself by the work I've done rather I define myself by the work I want to do. Skills can be taught, personality is inherent. Learning is one the strengths which I prefer to continue throughout and keep challenging myself. \n\n Being the youth am fueled by high energy levels and boundless enthusiasm. I'm easily inspired and willing to follow my fascinations wherever they take me. I'm a very multi-talented, expressive, passionate with natural ability to inspire and motivate. \n\n Curently working with Noesoft as a UI developer and in my spare time you'll find me doing photography or buffering some latest episodes on OTT platforms.",
  socials: {
    Facebook: {
      link: "https://www.facebook.com/hussain.manasawala.52/",
      text: "Facebook Link",
      icon: <FacebookIcon />,
      cssClass: "fb-icon",
    },
    Github: {
      link: "https://github.com/hussainmanasa",
      text: "Github Link",
      icon: <GitHubIcon />,
      cssClass: "git-icon",
    },
    Instagram: {
      link: "https://www.instagram.com/mr.nullpointer/",
      text: "Instagram Link",
      icon: <InstagramIcon />,
      cssClass: "insta-icon",
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/hussain-manasawala/",
      text: "LinkedIn Link",
      icon: <LinkedInIcon />,
      cssClass: "linkedin-icon",
    },
  },
  experiences: [
    {
      title: "Senior Software Engineer - Neosoft Technologies",
      date: "June 2022 - Present",
      description:
        "Innovative frontend developer full of life and inspiration. Working with my hands to make magic on the internet. Moreover, I am also involded in mentoring the new borns in the IT world.",
    },
    {
      title: "System Engineer - Tata Consultancy Services",
      date: "August 2019 - June 2022",
      description:
        "Working as an innovative front end developer creating scalable web and mobile apps using plane HTML CSS and Javascript, using frameworks like Angular and React and Adobe Magento CMS.",
    },
  ],
  education: [
    {
      title: "B.E Computer Engineering - Mumbai University",
      date: "2015 - 2019",
    },
    {
      title: "Sr. Secondary Education - CBSE Board",
      date: "2013 - 2015",
    },
  ],
  skils: [
    {
      title: "React",
      icon: reactIcon,
    },
    {
      title: "Next Js",
      icon: nextIcon,
    },
    {
      title: "Javascript",
      icon: javascriptIcon,
    },
    {
      title: "Github",
      icon: githubIcon,
    },
    {
      title: "Angular",
      icon: angularIcon,
    },
    {
      title: "Ionic",
      icon: ionicIcon,
    },
    {
      title: "Bootstrap",
      icon: bootstrapIcon,
    },
    {
      title: "Typescript",
      icon: typescriptIcon,
    },
    {
      title: "Magento",
      icon: magentoIcon,
    },
  ],
};

export default ResumeData;
