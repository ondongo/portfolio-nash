import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Matcher les routes sans _next, fichiers statiques et favicon
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
