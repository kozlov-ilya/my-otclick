/**
 * An array of public routes that do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/auth/new-verification"];

/**
 * An array of routes used for authentication
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
