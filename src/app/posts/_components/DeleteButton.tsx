"use client";
import { Post } from "@prisma/client";
import { FC, useTransition } from "react";

type Props = {
  deletePost: (id: number) => Promise<void>;
  post: Post;
};

export const DeleteButton: FC<Props> = ({ deletePost, post }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(() => deletePost(post.id));
      }}
    >
      {isPending ? "削除中..." : "削除"}
    </button>
  );
};
