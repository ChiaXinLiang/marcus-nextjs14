import Profile from "@/components/forms/Profile";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";

const page = () => {
  const { userId } = auth();
  if (!userId) return null;
  const mongoUser = getUserById({ userId });
  return <Profile clerkId={userId} user={JSON.stringify(mongoUser)} />;
};

export default page;
