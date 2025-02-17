import { initAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const { getSession, handleAuth, login, logout, register } = initAuth({
  clientId: process.env.KINDE_CLIENT_ID,
  clientSecret: process.env.KINDE_CLIENT_SECRET,
  issuerBaseURL: process.env.KINDE_ISSUER_URL,
  redirectURL: process.env.KINDE_SITE_URL + "/api/auth/callback",
  postLogoutRedirectURL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
});
