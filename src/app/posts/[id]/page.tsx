import { prisma } from "@/lib/prisma";
import type { NextPage } from "next";

const Page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (post === null) {
    throw new Error("post not found");
  }

  return (
    <div>
      <h1>Page</h1>
      <p>{post.title}</p>
      <p>{post.description}</p>
    </div>
  );
};

export default Page;
