import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

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
        "fixed top-0 left-0 z-50 w-screen px-20 py-2 max-md:px-8 max-xs:px-5 transition-all duration-500",
        hasScrolled && " backdrop-blur-[8px]"
      )}
    >
      <div className="container flex h-14 items-center justify-between ">
        <a className=" cursor-pointer z-2">
          <h3 className="text-primary">Biccas</h3>
        </a>

        <div
          className={clsx(
            " max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2  ",
            isOpen
              ? "block max-lg:h-full bg-white"
              : "max-lg:pointer-events-none max-lg:hidden"
          )}
        >
          <nav className="max-lg:relative top-24 max-lg:z-4 max-lg:text-xl max-lg:my-auto max-lg:h-4/5 ">
            <ul className={clsx("nav-li max-lg:px-12")}>
              <li>
                <NavLink title="home" />
              </li>
              <li>
                <NavLink title="about" />
              </li>
              <li>
                <NavLink title="features" />
              </li>
              <li>
                <NavLink title="pricing" />
              </li>
              <li>
                <NavLink title="testimonials" />
              </li>
            </ul>
          </nav>
        </div>

        <div className="buttons flex items-center justify-center gap-3">
          <button className="square-btn bg-white text-light hover:text-text">
            Log In
          </button>
          <button className="square-btn hover:bg-primary-dark">Sign Up</button>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 cursor-pointer border-primary rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? <X color="#54bd95" /> : <Menu color="#54bd95" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
