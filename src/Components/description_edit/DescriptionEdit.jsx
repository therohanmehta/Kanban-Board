import { useState } from "react";
import SubjectIcon from "@mui/icons-material/Subject";
import InfoIcon from "@mui/icons-material/Info";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from "./DescriptionEdit.module.css";
import { useRecoilState } from "recoil";
import {
  atomListUid,
  list,
  uidOfListItem,
} from "../../recoil/description_atoms/DescriptionAtoms";
import { getData } from "../../utils/Services";
// import { useEffect } from 'react';

function DescriptionEdit() {
  // const [description, setDescription] = useState(null);
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);
  const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem);
  const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);

  // const listData = getData();
  // const listIndex = listData.findIndex((ele) => ele.ListId === currentListUid)
  // const cardIndex = listData[listIndex].tasks.findIndex((ele) => ele.cardItemId === uidOfList)

  // useEffect(() => {
  //     setDescription(listData[listIndex].tasks[cardIndex].description)
  // },[])
  function handleDescription(e) {
    //need to store this inside localStorage.
    setDescription(e.target.value);
  }
  function handleSaveClick() {
    // const listData = getData();
    // const listIndex = listData.findIndex((ele) => ele.ListId === currentListUid)

    // const cardIndex = listData[listIndex].tasks.findIndex((ele) => ele.cardItemId === uidOfList)
    // listData[listIndex].tasks[cardIndex].description = description
    // console.log(listData[listIndex].tasks[cardIndex].description)
    // localStorage.setItem('listData', JSON.stringify(listData))

    setEdit(!edit);
    // listData[listIndex].tasks[cardIndex]
    // card.description = description
    // console.log(listData[listIndex].tasks[cardIndex])
    // console.log(listData[1].tasks[0])
    //    const currentIndex= listData[1].task.findIndex((ele) => ele.nameOfCardItem == nameOfList)
    //     listData[1].task[currentIndex].description = description;
    //     console.log(listData)
    //    setEdit(!edit)
  }

  return (
    <div className={style.descriptionContainer}>
      <div className={style.description}>
        <div>
          <SubjectIcon />
        </div>
        <div className={style.descriptionText}>Description</div>
        {edit ? (
          <InfoIcon />
        ) : (
          <p className={style.edit} onClick={() => setEdit(!edit)}>
            Edit
          </p>
        )}
      </div>

      <div className={style.inputContainer}>
        <Stack spacing={1}>
          {edit && (
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              onChange={handleDescription}
              value={description}
            />
          )}
          {edit && (
            <Button
              variant="contained"
              sx={{ width: "20%" }}
              onClick={handleSaveClick}
            >
              Save
            </Button>
          )}
        </Stack>
      </div>
      <div className={style.descriptionContent}>{edit ? "" : description}</div>
    </div>
  );
}

export default DescriptionEdit;
