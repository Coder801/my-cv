import { Card } from "@components/Card";
import { ExperienceCard } from "@components/ExperienceCard";

import styles from "./style.module.scss";

const tempData = [
  {
    position: "Senior Software Engineer",
    company: "Aura",
    period: "2021-10 - 2024-05",
    description:
      "Work on complex solutions in the field of user security. Creation and support of applications. Development of browser extensions for communication between desktop and web-interfaces.",
    skills: ["JavaScript", "Browser Extensions", "PWA"],
  },
  {
    position: "Senior Software Engineer",
    company: "EPAM Systems",
    period: "2020-02 - 2021-09",
    description:
      "Worked on several large projects as an outsourcing developer. Developed high-load web applications from scratch. Supported ongoing projects. Collaborated and interacted with various teams and clients.",
    skills: ["React/Redux", "JavaScript", "Django", "NodeJS"],
  },
  {
    position: "Software Engineer",
    company: "ZEO Alliance ",
    period: "2016-08 - 2021-10",
    description:
      "Worked as a frontend developer in a product company, beginning in the marketing department. Focused on creating user-friendly and visually appealing web interfaces to enhance customer engagement and drive conversions. Later transitioning to the R&D department. Focus shifted towards more experimental and cutting-edge projects. Prototyping, researching new technologies, and developing solutions.",
    skills: ["React/Redux", "JavaScript", "Electron"],
  },
  {
    position: "Frontend Developer",
    company: "ARIO Industrial Inc",
    period: "2013-05 - 2016-07",
    description:
      "Work orient in large-scale projects and commercial sites. Creating e-commerce websites. Development of adaptive websites and mobile applications.",
    skills: ["JavaScript", "Symfony"],
  },
  {
    position: "Markup developer",
    company: "GeeksForLess Inc",
    period: "2011-11 - 2012-06",
    description:
      "Кesponsible for creating and coding web pages. Work involved accurately converting designs from mockups into clean and semantically correct HTML, CSS and JS code. Created web page layouts, advertising material and logos from the ground up based on project requirements.",
  },
  {
    position: "Data-analist",
    company: "Fetch Technologies",
    period: "2011-04 - 2011-10",
    description:
      "Responsible for collecting data and organizing it into tables for further analysis. Developed web scraping agents, which involved writing scripts to automatically extract data from web pages.",
    skills: ["JavaScript", "MSSQL", "RegExp"],
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
