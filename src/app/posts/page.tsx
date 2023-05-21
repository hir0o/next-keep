import { prisma } from "@/lib/prisma";
import styles from "./page.module.css";
import { PostItem } from "./_components/PostItem";

export default async function Home() {
  const data = await prisma.post.findMany();

  return (
    <ul className={styles.list}>
      {data.map((post) => (
        // @ts-ignore
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
