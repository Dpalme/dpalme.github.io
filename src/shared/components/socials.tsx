import githubIcon from '#assets/logos/github.min.svg';
import linkedinIcon from '#assets/logos/linkedin.min.svg';
import emailIcon from '#assets/icons/mail.min.svg';
import documentIcon from '#assets/icons/file_blank_outline.min.svg';
import CVDocument from '#assets/Diego_Palmerin_CV_EN_2025_Q1.pdf';

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
  return (
    <div
      className="fixed bottom-2 right-2 z-20 flex flex-row gap-2"
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
    </div>
  );
};
