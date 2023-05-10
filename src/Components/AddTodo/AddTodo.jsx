//Chandra Bhan

import React, { useState } from "react";
import style from "./AddTodo.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import RollerShadesClosedOutlinedIcon from "@mui/icons-material/RollerShadesClosedOutlined";
function AddTodo() {
  const [todoname, setTodoName] = useState("To Do");
  return (
    <div>
      <h1>Card</h1>
      <div className={style.mainCardDiv}>
        <header>
          <div>
            <input
              className={style.todoNameField}
              type="text"
              value={todoname}
              onChange={(e) => setTodoName(e.target.value)}
            />
          </div>
          <div>
            <MoreHorizIcon color="disabled" />
          </div>
        </header>
        <section></section>
        <footer>
          <div>
            <button className={style.addCardBtn}>
              <AddIcon
                sx={{ marginBottom: "-5px" }}
                fontSize="small"
                color="#B7BCC7"
              />
              Add a card
            </button>
          </div>
          <div>
            <RollerShadesClosedOutlinedIcon fontSize="small" color="disabled" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default AddTodo;
