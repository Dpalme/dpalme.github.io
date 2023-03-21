import { NavLink } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';

export const Navbar = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.nav
      className="flex gap-4 md:gap-8 fixed px-4 py-6 md:backdrop-blur-none
      top-0 left-0 flex-col md:flex-row bg-surface-2 bg-opacity-50
      backdrop-blur-sm w-full md:w-auto md:bg-transparent z-40"
      initial={{ y: shouldReduceMotion ? 0 : '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavLink to="/">
        <span className="font-title italic">
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
