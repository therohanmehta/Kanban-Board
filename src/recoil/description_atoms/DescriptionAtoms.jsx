import { atom } from "recoil";
import { getData } from "../../utils/Services";

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

export const uidOfListItem = atom({
  key: "uidOfListItem",
  default: "",
});

export const list = atom({
  key: "list",
  default: getData(),
});

export const atomListUid = atom({
  key: "atomListUid",
  default: '',
});

export const atomCardName = atom({
  key: 'atomCardName',
  default:'',
})
export const wallpaper = atom({
  key: 'wallpaper',
  default:'https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_1280.jpg',
})


