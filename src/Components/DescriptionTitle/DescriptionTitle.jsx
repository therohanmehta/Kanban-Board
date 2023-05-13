import { Watch } from "../../Recoil/DescriptionAtoms/DescriptionAtoms";
import { useRecoilState } from "recoil";
import style from "./DescriptionTitle.module.css";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { atomCardName, list, uidOfListItem ,atomListUid} from "../../Recoil/DescriptionAtoms/DescriptionAtoms";
import { getData } from "../../utils/Services";
import { unstable_createChainedFunction } from "@mui/utils";
function DescriptionTitle() {
  const [watch, setWatch] = useRecoilState(Watch);
  const [titleEdit, setTitleEdit] = useState(false);
  const [titleText, setTitleText] = useRecoilState(atomCardName);
  const [listData, setListData] = useRecoilState(list)
  const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem)
  const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
  function handleTextField(e) {
    setTitleText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTitleEdit(!titleEdit);

    const tempList = getData()
    const listIndex = tempList.findIndex((ele) => ele.ListId === currentListUid)
    const cardIndex = tempList[listIndex].tasks.findIndex((ele) => ele.cardItemId === uidOfList)
    tempList[listIndex].tasks[cardIndex].nameOfCardItem = titleText
    localStorage.setItem('listData', JSON.stringify(tempList))
    setListData(tempList)
  }

  return (
    <>
      <div className={style.titleContainer}>
        <div className={style.titleIcon}>
          {/* <DvrOutlinedIcon className={`${style.icon} ${style.iconLarge}`} /> */}
          <DvrOutlinedIcon
            className={style.icon}
            style={{ fontSize: "28px" }}
          />
        </div>
        <div className={style.titleName}>
          <form onSubmit={handleSubmit}>
            {titleEdit ? (
              <>
                <TextField
                  id="outlined-size-small"
                  value={titleText}
                  size="small"
                  onChange={handleTextField}
                  className={style.textField}
                />
              </>
            ) : (
              <p onClick={() => setTitleEdit(!titleEdit)}>{titleText}</p>
            )}
          </form>

          <div className={style.listName}>
            <small>in list To Do </small>
            {watch && (
              <div>
                <VisibilityOutlinedIcon style={{ fontSize: "16px" }} />
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className={style.contentContainer}>
            <div className={style.notificationContainer}>
              <small>Notifications</small>
              <div>
                {watch ? (
                  <div
                    className={style.watching}
                    onClick={() => setWatch(!watch)}
                  >
                    <div>
                      <VisibilityOutlinedIcon style={{ fontSize: "16px" }} />
                    </div>
                    <small>Watching</small>
                    <div>
                      <CheckOutlinedIcon
                        className={style.check}
                        style={{ fontSize: "16px" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={style.watch} onClick={() => setWatch(!watch)}>
                    <div>
                      <VisibilityOutlinedIcon style={{ fontSize: "16px" }} />
                    </div>
                    <small>Watch</small>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescriptionTitle;
