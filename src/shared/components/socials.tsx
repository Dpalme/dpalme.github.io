import githubIcon from '@assets/logos/github.min.svg';
import instagramIcon from '@assets/logos/instagram.min.svg';
import linkedinIcon from '@assets/logos/linkedin.min.svg';
import emailIcon from '@assets/icons/mail.min.svg';
import documentIcon from '@assets/icons/file_blank_outline.min.svg';
import CVDocument from '@assets/Diego_Palmerin_CV_EN_Q1_2023.pdf';
import { m, useReducedMotion } from 'framer-motion';

export const SocialIcons = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.div
      className="flex flex-col gap-4 fixed left-2 bottom-2 z-20"
      initial={{ y: shouldReduceMotion ? 0 : '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <a
        href="https://github.com/Dpalme"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 aspect-square"
          loading="lazy"
          src={githubIcon}
          alt="github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/diego-palmerin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 aspect-square"
          loading="lazy"
          src={linkedinIcon}
          alt="linkedin"
        />
      </a>
      <a
        href="https://www.instagram.com/diegoo_pb2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 aspect-square"
          loading="lazy"
          src={instagramIcon}
          alt="instagram"
        />
      </a>
      <a href="mailto:dpalme@me.com" target="_blank" rel="noopener noreferrer">
        <img
          className="w-6 aspect-square"
          loading="lazy"
          src={emailIcon}
          alt="email"
        />
      </a>
      <a href={CVDocument} target="_blank" rel="noopener noreferrer" download>
        <img
          className="w-6 aspect-square"
          loading="lazy"
          src={documentIcon}
          alt="CV"
        />
      </a>
    </m.div>
  );
};
