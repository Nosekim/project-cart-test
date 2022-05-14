import * as Realm from "realm-web";

const appId = process.env.REACT_APP_REALM_APP_ID;
const app = new Realm.App({ id: appId ?? "" });

async function getUser(): Promise<Realm.User | null> {
  let user;
  if (!app.currentUser) {
    await app.logIn(Realm.Credentials.anonymous());
    user = app.currentUser;
  } else {
    await app.currentUser.refreshCustomData();
    user = app.currentUser;
  }

  return user;
}

export { getUser };
