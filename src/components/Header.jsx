import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const showHeaderOnScroll = () => {
      setShowHeader(window.scrollY > 80);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", showHeaderOnScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", showHeaderOnScroll);
    };
  }, [showHeader]);

  return (
    <header
      className={
        (showHeader ? "md:active" : "") +
        " fixed top-0 left-0 right-0 w-screen h-[60px] flex justify-end z-40 " +
        "md:justify-start md:items-center md:bg-neutral-900"
      }
    >
      <div
        className="hidden   
      md:order-1 md:flex md:items-center md:px-2 md:w-[70px] md:h-full md:z-40"
      >
        <Logo text="LK" />
      </div>

      <div className="md:order-2 md:flex-1 md:flex md:w-3/5 md:h-full">
        <Navbar navOpen={navOpen} />
      </div>

      <div className="hidden md:w-[70px] md:order-3 md:block md:mt-[1px] md:mr-2">
        <Button
          href="https://kanekoded.com/assets/doc/Lisa_Kane-Resume.pdf"
          text="CV"
          target="_blank"
          external={true}
          className="btn font-medium transition-all duration-300 md:border-transparent md:font-normal md:text-[13px] md:py-1 md:px-2 md:rounded-sm md:bg-brand-cyan md:hover:bg-brand-purple"
          iconSize={14}
        />
      </div>

      <div className="size-fit absolute right-3 top-3 md:hidden">
        <button
          id="menuBtn"
          className="relative w-12 h-12 z-50  
          grid place-items-center rounded-full text-white text-2xl bg-black/30 
          transition-[transform,background-color] duration-500 hover:bg-black/60 "
          onClick={() => setNavOpen((prev) => !prev)}
        >
          {navOpen ? <IoClose /> : <IoMenu />}
        </button>

        {windowWidth > 768 &&
          navOpen &&
          document.getElementById("menuBtn").click()}
      </div>
    </header>
  );
};

export default Header;
