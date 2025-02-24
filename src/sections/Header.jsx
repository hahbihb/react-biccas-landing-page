import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 capitalize transition-colors duration-500 cursor-pointer hover:text-black"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full px-20 py-2 transition-all duration-500",
        hasScrolled && " backdrop-blur-[8px]"
      )}
    >
      <div className="container flex h-14 items-center justify-between ">
        <a className=" cursor-pointer z-2">
          <h3 className="text-primary">Biccas</h3>
        </a>

        <div
          className={clsx(
            " max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 ",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <NavLink title="home" />
                <NavLink title="about" />
                <NavLink title="features" />
                <NavLink title="pricing" />
                <NavLink title="testimonials" />
              </li>
            </ul>
          </nav>
        </div>

        <div className="buttons flex items-center justify-center gap-3">
          <button className="square-btn bg-white text-light hover:text-text">
            Log In
          </button>
          <button className="square-btn">Sign Up</button>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
