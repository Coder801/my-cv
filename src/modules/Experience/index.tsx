import { Card } from "@components/Card";
import { ExperienceCard } from "@components/ExperienceCard";

import styles from "./style.module.scss";

const tempData = [
  {
    position: "Senior Software Engineer",
    company: "Aura",
    period: "2021-10 – 2024-05",
    description:
      "Work on complex solutions in the field of user security. Creation and support of applications. Development of browser extensions.",
  },
  {
    position: "Senior Software Engineering",
    company: "EPAM Systems",
    period: "2020-02 – 2021-09-",
    description:
      " Work on complex solutions in the field of user security. Creation and support of applications. Development of browser extensions.",
  },
  {
    position: "Frontend Developer",
    company: "ZEO Alliance ",
    period: "2016-08 - 2021-10",
    description:
      "Creating web and mobile application. Full Front-end development.",
  },
  {
    position: "Frontend Developer",
    company: "ARIO Industrial Inc",
    period: "2013-05 - 2016-07",
    description:
      "Frontend Developer Experience working in large-scale projects and commercial sites. Development of adaptive websites and mobile applications. Development of templates",
  },
  {
    position: "Freelancer",
    company: "Freelancer",
    period: "2012-06 - 2013-04",
    description:
      "Freelancer Freelancer Work in a team of developers. Creation of web templates and applications. Development of web sites CMS (Wordpress, Prestashop, Drupal). Assistance in optimization and promotion",
  },
  {
    position: "HTML/CSS Markup developer",
    company: "GeeksForLess Inc",
    period: "2011-11 - 2012-06",
    description:
      "HTML Coder Created web page layouts(convertion from PSD to HTML), advertising material and logos from the ground up based on project requirements.",
  },
  {
    position: "Data-analist",
    company: "GeeksForLess - Fetch Technologies",
    period: "2011-04 - 2011-10",
    description:
      "Data-analist Agents creation for the data extraction from external sources. Transformation and cleaning with the subsequent loading in the SQL base. Databases technologies(SQL etc), XML, Javascript, ETL frameworks",
  },
];

export const Experience = () => (
  <>
    <Card title="Work Experience">
      {tempData.map(({ position, company, period, description }) => (
        <ExperienceCard
          position={position}
          company={company}
          period={period}
          description={description}
        />
      ))}
    </Card>
  </>
);
