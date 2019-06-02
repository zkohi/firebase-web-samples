import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const setCustomUserClaimsAdmin = functions.auth.user().onCreate(
  async (user: functions.auth.UserRecord): Promise<any> => {
    try {
      return admin.auth().setCustomUserClaims(user.uid, {
        ...user.customClaims,
        ...{ admin: true }
      });
    } catch (e) {
      console.error(e);
      return Promise.reject(e);
    }
  }
);
