import githubIcon from '#assets/logos/github.min.svg';
import instagramIcon from '#assets/logos/instagram.min.svg';
import linkedinIcon from '#assets/logos/linkedin.min.svg';
import emailIcon from '#assets/icons/mail.min.svg';
import documentIcon from '#assets/icons/file_blank_outline.min.svg';
import CVDocument from '#assets/Diego_Palmerin_CV_EN_2025_Q1.pdf';
import vscoIcon from '#assets/logos/vsco.min.svg';
import { m, useReducedMotion } from 'framer-motion';

const SocialLink = (props: {
  link: string;
  download?: boolean;
  src: string;
  alt: string;
}) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      download={!!props.download}
    >
      <img
        className="aspect-square w-6"
        loading="lazy"
        src={props.src}
        alt={props.alt}
      />
    </a>
  );
};

export const SocialIcons = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.div
      className="fixed bottom-2 left-2 z-20 flex flex-col gap-4"
      initial={{ y: shouldReduceMotion ? 0 : '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <SocialLink
        link="https://github.com/Dpalme"
        src={githubIcon}
        alt="github"
      />
      <SocialLink
        link="https://www.linkedin.com/in/diego-palmerin/"
        src={linkedinIcon}
        alt="linkedin"
      />
      <SocialLink
        link="https://www.instagram.com/diegoo_pb2/"
        src={instagramIcon}
        alt="instagram"
      />
      <SocialLink
        link="https://vsco.co/diego-pb/gallery"
        src={vscoIcon}
        alt="vsco"
      />
      <SocialLink
        link="mailto:dpalme@me.com"
        src={emailIcon}
        alt="email"
      />
      <SocialLink
        link={CVDocument}
        download={true}
        src={documentIcon}
        alt="CV"
      />
    </m.div>
  );
};
