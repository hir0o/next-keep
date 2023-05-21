import { FC } from "react";
import styles from "./Title.module.css";

type Props = {
  title: string;
};

export const Title: FC<Props> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};
