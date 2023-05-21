import type { NextPage } from "next";
import styles from "./page.module.css";
import { Title } from "../_components/Title";
import Link from "next/link";
import { FC } from "react";

const Page: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title title="Posts" />
      </div>
      <Link href="/posts/create">create</Link>
      {children}
    </div>
  );
};

export default Page;
