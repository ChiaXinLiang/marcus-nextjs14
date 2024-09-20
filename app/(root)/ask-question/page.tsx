import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });
  console.log(mongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900"> Ask a question</h1>
      <div className="mt-9">
        <Question mangoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default page;
