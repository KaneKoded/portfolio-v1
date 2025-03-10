import { useEffect, useRef } from "react";
import { navItems } from "../data/data";

const Navbar = ({ navOpen }) => {
  const activeLink = useRef();
  navItems[0].ref = activeLink;

  useEffect(() => {
    window.addEventListener("scroll", activeOnScroll);
    return () => window.removeEventListener("scroll", activeOnScroll);
  }, []);

  const clickHandler = (event) => {
    currentActiveLink(event.target);
    navOpen && document.getElementById("menuBtn").click();
  };

  const currentActiveLink = (el) => {
    activeLink.current?.classList.remove("active");
    el.classList.add("active");
    activeLink.current = el;
  };

  const getActiveDataLink = () => {
    const sections = document.querySelectorAll("section");
    let activeDataLink = "";

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop - window.innerHeight / 2) {
        activeDataLink = section.getAttribute("data-link");
      }
    });

    return document.querySelector(`a.nav-link[href="${activeDataLink}"]`);
  };

  const activeOnScroll = () => {
    const navLink = getActiveDataLink();
    currentActiveLink(navLink);
  };

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      <div
        className={
          (navOpen ? "opacity-100 " : "opacity-0 ") +
          "size-full flex flex-col justify-center items-center text-center bg-dot-pattern " +
          "md:w-fit md:h-full md:flex-row md:mx-auto md:bg-none md:opacity-100 "
        }
      >
        <div className="md:size-full md:flex md:items-center ">
          {navItems.map(({ text, link, className, ref }, key) => (
            <a
              key={key}
              href={link}
              ref={ref}
              className={className}
              onClick={clickHandler}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
