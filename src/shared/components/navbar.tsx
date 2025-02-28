import { m, useReducedMotion } from 'framer-motion';
import { NavLink } from './navlink';

export const Navbar = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.nav
      className="fixed bottom-0 right-0 z-20
      flex w-full flex-col gap-2 bg-gradient-to-b
      from-[#0000] to-[#0008] pb-6 pl-12 pt-2 backdrop-blur-sm md:bottom-auto
      md:left-0 md:top-0
      md:flex-row md:gap-8 md:from-transparent
      md:to-transparent md:px-4 md:pt-4 md:backdrop-blur-none"
      initial={{ y: shouldReduceMotion ? 0 : '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <NavLink to="/">
        <span className="font-title text-sm italic md:text-inherit">
          DIEGO&nbsp;&nbsp;
          <span className="font-alt font-extrabold not-italic">PALMERÍN</span>
        </span>
      </NavLink>
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
    </m.nav>
  );
};

export default Navbar;
