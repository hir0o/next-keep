import { prisma } from "@/lib/prisma";
import type { NextPage } from "next";
import { redirect } from "next/navigation";

const Page: NextPage = () => {
  const action = async (a: FormData) => {
    "use server";
    const title = a.get("title");
    const content = a.get("content");

    const data = await prisma.post.create({
      data: {
        title: title as string,
        description: content as string,
      },
    });

    redirect("/posts");
  };

  return (
    <div>
      <h1>create</h1>
      <form action={action}>
        <input type="text" name="title" id="title" />
        <input type="text" name="content" id="content" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Page;
