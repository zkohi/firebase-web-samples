import { auth, firebase } from "../firebase";
import { useEffect, useState } from "react";

export const loginMicrosoft = async () => {
  try {
    const provider = new firebase.auth.OAuthProvider("microsoft.com");
    // provider.addScope("openid");
    // provider.addScope("email");
    const result = await auth.signInWithPopup(provider);
    // User is signed in.
    // IdP data available in result.additionalUserInfo.profile.
    // OAuth access token can also be retrieved:
    // result.credential.accessToken
    console.log("login Microsoft provider");
    console.log(result);
  } catch (e) {
    // Handle error.
    console.log("error");
    console.log(e);
  }
};

export const signOut = async () => {
  await auth.signOut();
};

export const isLogin = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // @ts-ignore
        setUser(user);
        console.log("user.email", user.email);
      }
      console.log("user", user);
    });
  }, []);

  return [user];
  // return new Promise(resolve => {
  //   @ts-ignore
  // auth.onAuthStateChanged(resolve);
  // });
};
