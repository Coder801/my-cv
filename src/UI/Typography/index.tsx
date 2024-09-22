import { ReactNode, createElement } from "react";
import styled, { css, RuleSet } from "styled-components";

type HeadersType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type ParagraphTypes = "p";
type TagType = HeadersType | ParagraphTypes;
type TypographyProps = {
  tag?: TagType;
  children: ReactNode;
  className?: string;
};

type StyledType = {
  [key in TagType]: any;
};

const getHeader = (level: HeadersType): RuleSet => {
  // TODO: Move to theme file
  const headers = {
    h1: [96, -1.5],
    h2: [60, -0.5],
    h3: [48, 0],
    h4: [34, 0.25],
    h5: [24, 0],
    h6: [20, 0.15],
  };

  const [size, spacing] = headers[level];

  return css`
    display: block;
    font-family: var(--primary-font);
    font-weight: 500;
    font-style: normal;
    margin: 0;
    padding: 0;
    color: var(--primary-color);
    font-size: ${size}px;
    letter-spacing: ${spacing}px;
  `;
};

const S: StyledType = {
  h1: styled.h1`
    ${getHeader("h1")}
    color: red;
  `,
  h2: styled.h2`
    ${getHeader("h2")}
  `,
  h3: styled.h3`
    ${getHeader("h3")}
  `,
  h4: styled.h4`
    ${getHeader("h4")}
  `,
  h5: styled.h5`
    ${getHeader("h5")}
  `,
  h6: styled.h6`
    ${getHeader("h6")}
  `,
  p: styled.p`
    font-family: var(--secondary-font);
    font-size: 16px;
    letter-spacing: 0.5px;
    color: var(--text-color);

    & mark {
      color: var(--highlight-color);
      background-color: transparent;
    }
  `,
};

export const Typography = ({
  tag = "p",
  children,
  className,
}: TypographyProps) =>
  createElement(
    S[tag],
    {
      className: className,
    },
    children
  );
