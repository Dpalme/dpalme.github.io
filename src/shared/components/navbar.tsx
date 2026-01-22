import { NavLink } from './navlink';
import { useLocation } from '@tanstack/react-router';

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      className="fixed bottom-0 right-0 z-top
      flex w-full flex-col gap-2 bg-gradient-to-b text-[#bf8b73]
      from-[#0000] to-[#0008] pb-6 pl-16 pt-2 backdrop-blur-sm md:bottom-auto
      md:left-0 md:top-0
      md:flex-row md:gap-8 md:bg-gradient-to-t md:px-8 md:pt-4"
    >
      {location.pathname != '/' && (
        <NavLink to="/">
          <span className="font-title text-sm italic md:text-inherit">
            DIEGO&nbsp;&nbsp;
            <span className="font-alt font-extrabold not-italic">PALMERÍN</span>
          </span>
        </NavLink>
      )}
      <div className="flex gap-6 md:gap-4">
        <NavLink
          to="/work"
          className="font-title text-xl lowercase drop-shadow-lg md:text-base"
        >
          my work
        </NavLink>
        <NavLink
          to="/projects"
          className="font-title text-xl lowercase drop-shadow-lg md:text-base"
        >
          side projects
        </NavLink>
        <NavLink
          to="/about"
          className="font-title text-xl lowercase drop-shadow-lg md:text-base"
        >
          about me
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
