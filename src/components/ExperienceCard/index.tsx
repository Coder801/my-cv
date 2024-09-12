import { Typography } from "@ui/Typography";

import styles from "./style.module.scss";

type ExperienceCardProps = {
  position: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
};

export const ExperienceCard = ({
  position,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) => (
  <article>
    <p className={styles.position}>{position}</p>
    <p className={styles.company}>
      <small>{company}</small>
    </p>
    <p className={styles.period}>{period}</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.skills}>{skills && skills.join(", ")}</p>
  </article>
);
