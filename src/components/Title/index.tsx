import classnames from "classnames";

import styles from "./style.module.scss";

type TitleProps = {
  name: string;
  position: string;
  className?: string;
};

export const Title = ({ name, position, className }: TitleProps) => (
  <div className={classnames(className, styles.container)}>
    <h2 className={classnames(styles.name)}>{name}</h2>
    <h3 className={classnames(styles.position)}>{position}</h3>
  </div>
);
