import "./Encabezado.css";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <div className="navbar lg:hidden block absolute top-16 w-full left-0 right-0 bg-black transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="home">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <p>Home</p>
          </li>
        </Link>
        <Link spy={true} smooth={true} to="sobre-mi">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <p>About Me</p>
          </li>
        </Link>
        <Link spy={true} smooth={true} to="skills">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">
            <p>Skills</p>
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Proyectos">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <p>Projects</p>
          </li>
        </Link>
      </ul>
    </div>
  );
  return (
    <nav>
      <div className="h-10vh bg-black flex justify-between z-50 text-white lg:py-5 px-20 py-4 h-16">
        <div className="flex items-center flex-1">
          <h1 className="text-9x1 ">Portfolio</h1>
        </div>
        <div className=" lista lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="nav flex-10  ">
            <ul className="flex gap-8 mr-16 text-[18px] ">
              <Link spy={true} smooth={true} to="home">
                <li className="hover:text-stone-400 transition border-b-2 border-slate-900 hover:fuchsia-600 cursor-pointer">
                  <p>Home</p>
                </li>
              </Link>
              <Link spy={true} smooth={true} to="sobre-mi">
                <li className="hover:text-stone-400 transition border-b-2 border-slate-900 hover:fuchsia-600 cursor-pointer">
                  <p>About Me</p>
                </li>
              </Link>
              <Link spy={true} smooth={true} to="skills">
                <li className="hover:text-stone-400 transition border-b-2 border-slate-900 hover:fuchsia-600 cursor-pointer">
                  <p>Skills</p>
                </li>
              </Link>
              <Link spy={true} smooth={true} to="proyectos">
                <li className="hover:text-stone-400 transition border-b-2 border-slate-900 hover:fuchsia-600 cursor-pointer">
                  <p>Projects</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transtion" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default navbar;
