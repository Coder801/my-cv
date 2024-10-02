import { Card } from "@components/Card";
import { Typography } from "@ui/Typography";

import { useGetAboutQuery } from "./api/index";

export const About = () => {
  const { data = [], error, isLoading } = useGetAboutQuery([]);

  return (
    <Card title="About Me">
      <Typography>{data.content}</Typography>
    </Card>
  );
};
