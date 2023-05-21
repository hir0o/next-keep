import styles from "./page.module.css";
import Link from "next/link";

const links = [
  {
    link: "/posts",
    title: "Posts",
  },
];

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Links</h1>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.link} className={styles.listItem}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
