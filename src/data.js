// Skills icons - https://react-icons.github.io/react-icons/
import {
	FaPython,
	FaLinux,
	FaGithub,
	FaGitAlt,
	FaLink
} from "react-icons/fa";
import {
	SiNumpy,
	SiPandas,
	SiTensorflow,
	SiJavascript,

} from "react-icons/si";

import {
	TbLetterC
} from "react-icons/tb"
// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "gunaykrgl";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <SiNumpy className="display-4" />,
    name: "Numpy",
  },
  {
    id: 3,
    skill: <SiPandas className="display-4" />,
    name: "Pandas",
  },
  {
    id: 4,
    skill: <SiTensorflow className="display-4" />,
    name: "Tensorflow",
  },
  {
    id: 5,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 6,
    skill: <TbLetterC className="display-4" />,
    name: "C/C++",
  },
  {
    id: 7,
    skill: <FaLinux className="display-4" />,
    name: "Linux",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithub className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xaykydwq";
