import { Card } from "@components/Card";
import { ExperienceCard } from "@components/ExperienceCard";

import styles from "./style.module.scss";

export const Education = () => (
  <Card title="Education">
    <ExperienceCard
      position="Computer Science"
      company="Petro Mohyla Black Sea State University"
      period="2007 - 2013"
    />
  </Card>
);
