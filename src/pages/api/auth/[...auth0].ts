// pages/api/auth/[auth0].js
import {handleAuth, handleCallback} from '@auth0/nextjs-auth0';
import { setCookie } from "cookies-next";

// @ts-ignore
const afterCallback = (req, res, session, state) => {
  setCookie("token", session.idToken, { req, res, maxAge: 60 * 60 * 24 });
  return session
};

export default handleAuth({
  async callback(req, res) {
    try {
      // @ts-ignore
      await handleCallback(req, res, {afterCallback});
    } catch (error) {
      // @ts-ignore
      res.status(error.status || 500).end();
    }
  }
});
