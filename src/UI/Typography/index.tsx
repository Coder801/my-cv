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
    font-weight: 500;
    font-style: normal;
    margin: 0;
    padding: 0;
    font-size: ${size}px;
    letter-spacing: ${spacing}px;
    font-family: ${(props) => props.theme.primaryFont};
    color: ${(props) => props.theme.colors.primary};
  `;
};

const S: any = {};

const ProxyS = new Proxy(S as StyledType, {
  get(_, prop: TagType) {
    if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(prop)) {
      return styled[prop]`
        ${getHeader(prop as HeadersType)}
      `;
    }

    return styled.p`
      font-size: 16px;
      letter-spacing: 0.5px;
      color: ${(props) => props.theme.colors.text};
      font-family: ${(props) => props.theme.secondaryFont};

      & mark {
        background-color: transparent;
        color: ${(props) => props.theme.colors.highlight};
      }
    `;
  },
});

export const Typography = ({
  tag = "p",
  children,
  className,
}: TypographyProps) =>
  createElement(
    ProxyS[tag],
    {
      className: className,
    },
    children
  );
