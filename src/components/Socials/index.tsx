import classnames from "classnames";

import styles from "./style.module.scss";

type SocialsProps = {
  className?: string;
};

export const Socials = ({ className }: SocialsProps) => {
  const socialList = [
    {
      name: "linkedin",
      title: "LinkedIn",
      link: "https://www.linkedin.com/",
    },
    {
      name: "facebook",
      title: "Facebook",
      link: "",
    },
    {
      name: "discord",
      title: "Discord",
      link: "https://www.discord.com/",
    },
    {
      name: "dithub",
      title: "Github",
      link: "https://www.github.com/",
    },
  ];

  return (
    <div className={classnames(className, styles.container)}>
      {socialList.map(({ name, title, link }) => (
        <dl key={name}>
          <dt className={classnames(styles.title)}>{title}</dt>
          <dd className={classnames(styles.link)}>{link}</dd>
        </dl>
      ))}
    </div>
  );
};
