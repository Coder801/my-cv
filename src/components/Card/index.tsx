import { ReactNode } from "react";

import { Typography } from "@ui/Typography";

import styles from "./style.module.scss";

type CardProps = {
  title: string;
  children: ReactNode;
};

export const Card = ({ title, children }: CardProps) => (
  <article className={styles.card}>
    <Typography tag="h3" className={styles.title}>
      {title}
    </Typography>
    <section className={styles.content}>{children}</section>
  </article>
);
