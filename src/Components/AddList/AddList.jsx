//Samad
import React, { useState } from "react";
import styles from "./AddList.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuid } from "uuid";
import AddTodo from "../AddTodo/AddTodo";

export default function AddList() {
  const [isVisible, setIsVisible] = useState(true);
  const [addList, setAddList] = useState([]);
  const [listName, setListName] = useState("");

  function handleAddList() {
    setIsVisible(false);
  }

  const handleAddCardItem = () => {
    if (listName != "") {
      const tempList = {
        ListId: uuid(),
        nameOfList: listName,
      };

      setAddList([...addList, tempList]);
    }
  };

  return (
    <div style={{ display: "flex", margin: "20px" }}>
      <div style={{ display: "flex", marginLeft: "20px" }}>
        {addList.map((list) => (
          <AddTodo listName={list.nameOfList} />
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
