// pages/api/auth/[auth0].js
import {handleAuth, handleCallback} from '@auth0/nextjs-auth0';
import Cookies from "js-cookie";

// @ts-ignore
const afterCallback = (req, res, session, state) => {
  Cookies.set('token', session.idToken, {expires: 7})
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
