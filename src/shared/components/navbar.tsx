import { m, useReducedMotion } from 'framer-motion';
import { NavLink } from './navlink';

export const Navbar = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.nav
      className="flex gap-2 md:gap-8 fixed
      pl-12 pt-2 pb-6 md:px-4 md:pt-4
      bottom-0 md:top-0 md:bottom-auto right-0 md:left-0 flex-col md:flex-row
      backdrop-blur-sm md:backdrop-blur-none
      w-full z-20 bg-gradient-to-b
      from-[#0000] to-[#0008] md:from-transparent md:to-transparent"
      initial={{ y: shouldReduceMotion ? 0 : '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavLink to="/">
        <span className="font-title italic text-sm md:text-inherit">
          DIEGO&nbsp;&nbsp;
          <span className="font-alt font-extrabold not-italic">PALMERÍN</span>
        </span>
      </NavLink>
      <div className="flex gap-6 md:gap-4">
        <NavLink
          to="/work"
          className="font-title lowercase md:text-base text-xl drop-shadow-lg"
        >
          my work
        </NavLink>
        <NavLink
          to="/projects"
          className="font-title lowercase md:text-base text-xl drop-shadow-lg"
        >
          side projects
        </NavLink>
        <NavLink
          to="/about"
          className="font-title lowercase md:text-base text-xl drop-shadow-lg"
        >
          about me
        </NavLink>
      </div>
    </m.nav>
  );
};

export default Navbar;
