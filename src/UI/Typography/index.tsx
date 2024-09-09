import { ReactNode, createElement } from "react";
import classnames from "classnames";

import styles from "./style.module.scss";

type TypographyProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: ReactNode;
  className?: string;
};

export const Typography = ({
  tag = "p",
  children,
  className,
}: TypographyProps) =>
  createElement(
    tag,
    {
      className: classnames(`${styles[tag]} ${className}`),
    },
    children
  );
