import classnames from "classnames";

import styled from "styled-components";

const S = {
  Container: styled.div``,
  Title: styled.dt``,
  Link: styled.dd``,
};

type SocialsProps = {
  className?: string;
};

const data = [
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

export const Socials = ({ className }: SocialsProps) => {
  return (
    <S.Container className={classnames(className)}>
      {data.map(({ name, title, link }) => (
        <dl key={name}>
          <S.Title>{title}</S.Title>
          <S.Link>{link}</S.Link>
        </dl>
      ))}
    </S.Container>
  );
};
