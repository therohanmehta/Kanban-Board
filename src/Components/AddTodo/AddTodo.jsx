//Chandra Bhan

import React from "react";
import style from "./AddTodo.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import RollerShadesClosedOutlinedIcon from "@mui/icons-material/RollerShadesClosedOutlined";
function AddTodo() {
  return (
    <div>
      <h1>Card</h1>
      <div className={style.mainCardDiv}>
        <header>
          <div>To Do</div>
          <div>
            <MoreHorizIcon color="disabled" />
          </div>
        </header>
        <section></section>
        <footer>
          <div>
            <button>
              <AddIcon
                sx={{ marginBottom: "-5px" }}
                fontSize="small"
                color="disabled"
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
