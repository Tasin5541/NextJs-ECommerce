import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  clockSkewInSeconds: 20,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
