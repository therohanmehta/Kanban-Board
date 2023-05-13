//Samad
import React, { useState } from "react";
import styles from "./AddList.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuid } from "uuid";
import AddTodo from "../add_todo/AddTodo";
import {
  list,
  atomListUid,
} from "../../recoil/description_atoms/DescriptionAtoms";
import { useRecoilState } from "recoil";
import { getData } from "../../utils/Services";

export default function AddList() {
  const [isVisible, setIsVisible] = useState(true);
  let data = getData();
  const [listName, setListName] = useState("");
  const [listData, setListData] = useRecoilState(list);
  const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
  function handleAddList() {
    setIsVisible(false);
  }

  const handleAddCardItem = () => {
    if (listName != "") {
      const tempList = {
        ListId: uuid(),
        nameOfList: listName,
      };
      setListName("");
      setListData([...listData, tempList]);
    }
  };
  function handleDelete(listId) {
    const updatedList = listData.filter((ele) => ele.ListId != listId);
    setListData(updatedList);
    console.log(listData);
    localStorage.setItem("listData", JSON.stringify(updatedList));
  }
  function handleListNameChange(e, listId) {
    console.log(e, listId)
  }

  return (
    <div style={{ display: "flex", margin: "20px" }}>
      <div style={{ display: "flex", marginLeft: "20px" }}>
        {listData.map((list) => (
          <AddTodo
            listName={list.nameOfList}
            listId={list.ListId}
            handleDelete={() => handleDelete(list.ListId)}
            handleListNameChange={handleListNameChange}
          />
        ))}
      </div>
      <div
        style={{ marginLeft: "20px" }}
        className={`${styles.container} ${isVisible ? "" : styles.expanded}`}
      >
        {isVisible ? (
          <div className={styles.btnWrapper} onClick={handleAddList}>
            <AddIcon /> <span> Add another list</span>
          </div>
        ) : (
          <div className={styles.inputWrapper}>
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className={styles.inputField}
              placeholder="Enter list title..."
            />
            <div className={styles.innerDiv}>
              <Button onClick={handleAddCardItem} variant="contained">
                Add List
              </Button>
              <CloseIcon
                onClick={() => setIsVisible(!isVisible)}
                id={styles.closeIcon}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

//! folder-casing
