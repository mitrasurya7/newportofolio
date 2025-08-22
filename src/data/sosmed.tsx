import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


  const HoverSocial: string =
    " text-3xl  hover:text-blue-400 transition-all duration-500"
export const dataSocialMedia = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/mitrasurya7/",
      icon: <FaLinkedin className={HoverSocial}/>,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/mitradev.me/",
      icon: <FaInstagramSquare className={HoverSocial}/>,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/mitrasurya7",
      icon: <FaSquareXTwitter className={HoverSocial}/>,
    },
    {
      name: "Github",
      link: "https://github.com/mitrasurya7",
      icon: <FaGithubSquare className={HoverSocial}/>,
    },
  ];