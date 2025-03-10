import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="border-t-2 border-solid border-b-2 border-black bg-black w-full flex items-center text-base text-neutral-400 lg:p-5">
      <div className="p-2 w-full h-full min-h-[100px] flex flex-col items-center text-center lg:flex-row lg:text-left">
        <div className="w-full mx-2 py-2">
          <p className="text-pretty max-w-[500px] mx-auto leading-relaxed lg:max-w-xs">
            This website was roughly designed in{" "}
            <span className="font-semibold">Penpot</span>, coded in{" "}
            <span className="font-semibold">VSCode</span>, and built with{" "}
            <span className="font-semibold">Vite</span>,{" "}
            <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">TailwindCss.</span>{" "}
            <a
              href="https://github.com/KaneKoded/portfolio-v1"
              target="_blank"
              className="text-[#1b97a4] font-medium whitespace-nowrap hover:underline"
            >
              Github Repo
              <FiExternalLink className="inline ml-[2px]" />
            </a>{" "}
          </p>
        </div>
        <div className="w-full text-center mx-2">
          <h5 className="pt-2 lg:pt-0 font-semibold">Quick Links:</h5>

          <ul className="pl-5 [list-style-type:square] text-[#1b97a4] font-medium mx-auto py-2 w-fit text-left sm:text-center sm:pl-0">
            <li className="m-1 px-1 py-2 sm:inline">
              <a href="#home">Home</a>
            </li>
            <li className="m-1 px-1 py-2 sm:inline">
              <a href="#about">About</a>
            </li>
            <li className="m-1 px-1 py-2 sm:inline">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="m-1 px-1 py-2 sm:inline">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full py-8 text-center mx-2 lg:py-2">
          <a href="https://www.facebook.com/lisa.kane.547" target="_blank">
            <FaFacebookSquare
              size={32}
              className="inline mr-[3px] text-neutral-400 [transition:.5s] hover:text-brand-purple"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/lisa-kane-webdev/"
            target="_blank"
          >
            <FaLinkedin
              size={32}
              className="inline mr-[3px] text-neutral-400 [transition:.5s] hover:text-brand-purple"
            />
          </a>

          <a href="https://github.com/KaneKoded" target="_blank">
            <FaGithubSquare
              size={32}
              className="inline text-neutral-400 [transition:.5s] hover:text-brand-purple"
            />
          </a>

          <div className="w-full pt-6 pb-4 text-sm text-center">
            &#169; Lisa Kane {new Date().getFullYear()} all rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
