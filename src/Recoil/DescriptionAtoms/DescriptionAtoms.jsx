import { atom } from "recoil";

export const Watch = atom({
  key: "watch",
  default: false,
});

export const ShowActivity = atom({
  key: "showActivity",
  default: false,
});

export const showDialog = atom({
  key: "showDialog",
  default: false,
});

export const nameOfListItem = atom({
  key: "nameOfListItem",
  default: "",
});

export const list = atom({
  key: "list",
  default: [],
});
