import { Typography } from "@ui/Typography";

import styles from "./style.module.scss";

type ExperienceCardProps = {
  position: string;
  company: string;
  period: string;
  description?: string;
  skills?: string[];
};

export const ExperienceCard = ({
  position,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) => (
  <article className={styles.content}>
    <p className={styles.position}>{position}</p>
    <p className={styles.company}>
      <strong>{company}</strong> |{" "}
      <em>
        <mark>{period}</mark>
      </em>
    </p>
    {description && <p className={styles.description}>{description}</p>}
    {skills?.length && <p className={styles.skills}>{skills.join(", ")}</p>}
  </article>
);
