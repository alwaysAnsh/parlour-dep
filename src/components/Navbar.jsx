import { useState } from "react";
import { FaBars, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "/Logo.png";
import insta from "/insta.png";
import pipe from "/pipe.png";
import facebook from "/facebook.png";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../data/navbar-links";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenuOnBackgroundClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };
  const toggleMenu = (e) => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <main
      onClick={closeMenuOnBackgroundClick}
      className="mb-5 "
    >
      <div className="pr-5 pt-2 flex justify-between items-center  ">
        <Link to="/">
          <div className="w-16 md:w-20">
            <img className="w-full" src={logo} alt="" />
          </div>
        </Link>

        {/* Hamburger menu icon for small and medium screens */}
        <div className="lg:hidden flex-shrink-0">
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Navbar links for large screens */}
        <nav
          className={`pb-2 border-b-2 border-red-900 hidden lg:flex lg:justify-center  lg:w-1/2 lg:gap-x-16 text-lg  ${
            isMenuOpen ? "flex-col" : ""
          }`}
        >
          <ul
            className={`lg:flex lg:gap-x-16 ${
              isMenuOpen ? "flex-col" : "flex-row"
            }`}
          >
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path} onClick={closeMenu}>
                  <p
                    className={`${
                      matchRoute(link.path) ? "text-yellow-600" : "text-red-900"
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons for large screens */}
        <div className="hidden lg:flex justify-between items-center">
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <img className="w-9 pr-1" src={insta} alt="Instagram" />
          </a>
          <img className="w-3 pr-1" src={pipe} alt="" />
          <a
            href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <img className="w-9" src={facebook} alt="Facebook" />
          </a>
        </div>

        {/* Responsive menu for small and medium screens */}
        <div
          className={`flex   z-50 fixed top-0 left-0 w-full h-full  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex max-h-64 justify-center absolute top-16 right-2 p-10 shadow-md bg-white bg-opacity-75 bg-blur  rounded-md">
            <ul>
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link?.path} onClick={closeMenu}>
                    <p
                      className={`text-xl ${
                        matchRoute(link.path)
                          ? "text-yellow-600"
                          : "text-red-900"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))}
              {/* Icons for small screens */}
              <div className="flex flex-row pt-3 gap-2">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    <FaInstagram color="#732A2A" size="28" className="w-10 " alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    <FaFacebook size="28" color="#732A2A"  alt="Facebook" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
