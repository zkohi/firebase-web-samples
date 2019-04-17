import firebase from "firebase/app";
import "firebase/auth";

const config = {
  // set your config here
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
export { auth, firebase };
