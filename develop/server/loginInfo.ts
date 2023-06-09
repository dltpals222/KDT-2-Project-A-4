interface UserInfo {
    userid : string;
    userpwd : string;
}

export let globalState = {
  DB: {
    userinfo: [
      {
        userid: "admin",
        userpwd: "qwe123",
      },
      {
        userid: "test01",
        userpwd: "qwe123",
      },
      {
        userid: "dgchoi3904",
        userpwd: "qwe123",
      },
    ],
  },
};

export function getUserInfo() {
  return globalState.DB.userinfo;
}
export function setUserInfo(arr: UserInfo[]) {
  globalState.DB.userinfo = arr;
}
