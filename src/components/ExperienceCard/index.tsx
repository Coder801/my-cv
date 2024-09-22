import styled from "styled-components";

import { Typography } from "@ui/Typography";

const S = {
  Container: styled.article`
    margin-bottom: 40px;
  `,
  Position: styled(Typography)`
    color: var(--color1);
    font-size: 20px;
    margin: 8px 0;
  `,
  Company: styled(Typography)`
    margin: 0;
    color: var(--color6);
  `,
  Period: styled(Typography)`
    font-style: italic;
  `,
  Description: styled(Typography)``,
  Skills: styled(Typography)``,
};

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
  <S.Container>
    <S.Position>{position}</S.Position>
    <S.Company>
      <strong>{company}</strong> |{" "}
      <em>
        <mark>{period}</mark>
      </em>
    </S.Company>
    {description && <S.Description>{description}</S.Description>}
    {skills?.length && <S.Skills>{skills.join(", ")}</S.Skills>}
  </S.Container>
);
