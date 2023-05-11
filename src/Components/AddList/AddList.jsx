//SRahman
import React, { useState } from "react";
import styles from "./AddList.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function AddList() {
  const [isVisible, setIsVisible] = useState(true);

  function handleAddList() {
    setIsVisible(false);
  }
  return (
    <div className={`${styles.container} ${isVisible ? "" : styles.expanded}`}>
      {isVisible ? (
        <div className={styles.btnWrapper} onClick={handleAddList}>
          <AddIcon /> <span > Add another list</span>
        </div>
      ) : (
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Enter list title..."
          />
          <div className={styles.innerDiv}>
            <Button variant="contained">Add List</Button>
            <CloseIcon
              onClick={() => setIsVisible(!isVisible)}
              id={styles.closeIcon}
            />
          </div>
        </div>
      )}
    </div>
  );
}
