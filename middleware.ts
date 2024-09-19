import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/api/webhook",
  "question/:id",
  "/tags",
  "/tags/:id",
  "/profile/:id",
  "/community",
  "/jobs",
]);

const ignoredRoutes = ["/api/webhook", "/api/chatgpt"];

export default clerkMiddleware((auth, req) => {
  if (
    !isPublicRoute(req) &&
    !ignoredRoutes.some((route) => req.url.includes(route))
  ) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
