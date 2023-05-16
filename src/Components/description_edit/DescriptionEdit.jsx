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
import { useEffect } from "react";

function DescriptionEdit() {
  const [description, setDescription] = useState('');
  // const [description,setDescription]=useState("");
  const [edit, setEdit] = useState(false);
  const [completeListData, setCompleteListData] = useRecoilState(list)
  const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem);
  const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
  const itemidFromLocal = localStorage.getItem('itemId')
  const uidOfListItemFromLocal = localStorage.getItem('uidOfListItem')
  
//   let cardIndex = 0
  
//   const listData = getData();
//   const listIndex = listData.findIndex((ele) => ele.ListId === currentListUid);
// // if(listIndex!=-1)
// // {
//   cardIndex = listData[listIndex].tasks.findIndex(
//     (ele) => ele.cardItemId === uidOfList
// );



  
  useEffect(() => {
    let cardIndex = 0
  
  const listData = getData();
  // const listIndex = listData.findIndex((ele) => ele.ListId === currentListUid);
  const listIndex = listData.findIndex((ele) => ele.ListId === currentListUid);
// if(listIndex!=-1)
// {
  cardIndex = listData[listIndex].tasks.findIndex(
    (ele) => ele.cardItemId === uidOfList
);
  setDescription(listData[listIndex].tasks[cardIndex].description);

    }, []);


  function handleDescription(e) {
    //need to store this inside localStorage.
    setDescription(e.target.value);
  }
  function handleSaveClick() {
    const listData = getData();
    const listIndex = listData.findIndex(
      (ele) => ele.ListId === currentListUid
    );
    const cardIndex = listData[listIndex].tasks.findIndex(
      (ele) => ele.cardItemId === uidOfList
    );

    listData[listIndex].tasks[cardIndex].description = description;

    console.log(listData[listIndex].tasks[cardIndex].description);
    localStorage.setItem("listData", JSON.stringify(listData));
      setCompleteListData(listData)
    setEdit(!edit);
    console.log(completeListData);
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
