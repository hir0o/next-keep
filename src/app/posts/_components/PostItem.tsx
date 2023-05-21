import { Post } from "@prisma/client";
import styles from "./PostItem.module.css";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { DeleteButton } from "./DeleteButton";
import { revalidatePath } from "next/cache";

type Props = {
  post: Post;
};

export const PostItem = async ({ post }: Props) => {
  const deletePost = async (id: number) => {
    "use server";
    await prisma.post.delete({
      where: {
        id,
      },
    });
    revalidatePath("/posts");
  };

  return (
    <li className={styles.postItem}>
      <Link href={`/posts/${post.id}`} className={styles.postItemLink}>
        {post.title}
      </Link>
      <DeleteButton deletePost={deletePost} post={post} />
    </li>
  );
};
