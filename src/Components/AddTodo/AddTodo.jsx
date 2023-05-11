//Chandra Bhan

import React, { useState } from "react";
import style from "./AddTodo.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import RollerShadesClosedOutlinedIcon from "@mui/icons-material/RollerShadesClosedOutlined";
import AddItem from "../../atoms/AddItem/AddItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { v4 as uuid } from "uuid";
import Popup from "reactjs-popup";

function AddTodo({ listName }) {
  const [todoname, setTodoName] = useState(listName);
  const [addItem, setAddItem] = useState(false);
  const [open, setOpen] = useState(false);
  const [updatedNameOfCardItem, setUpdatedNameOfCardItem] = useState("");
  const [todoList, setTodoList] = useState([
    // {
    //   cardItemId: uuid(),
    //   nameOfCardItem: "Dummy Nme",
    // },
  ]);
  const handleOpenAddItemBox = () => {
    setAddItem(true);
  };
  const handleAddCardItem = (nameOfCardItem) => {
    const tempDataOfCard = {
      cardItemId: uuid(),
      nameOfCardItem: nameOfCardItem,
      description: "",
    };

    setTodoList([...todoList, tempDataOfCard]);
  };

  const handleUpdationOfCartItem = (id, close) => {
    if (updatedNameOfCardItem != "") {
      const tempTodoItem = todoList.map((item) => {
        if (item.cardItemId == id) {
          return {
            cardItemId: item.cardItemId,
            nameOfCardItem: updatedNameOfCardItem,
            description: "",
          };
        }
        return item;
      });
      setTodoList([...tempTodoItem]);
      setUpdatedNameOfCardItem("");
      close();
    }
  };

  return (
    <div style={{ marginLeft: "20px" }}>
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
            <MoreHorizIcon fontSize="small" color="disabled" />
          </div>
        </header>
        <section>
          {todoList.map((todoList) => (
            <div
              className={style.itemOfCardDiv}
              key={todoList.cardItemId}
              onClick={() => setOpen(true)}
            >
              <div>{todoList.nameOfCardItem}</div>

              <div>
                <Popup
                  trigger={
                    <button className={style.editBtn}>
                      <EditOutlinedIcon fontSize="5px" />
                    </button>
                  }
                  position="bottom center"
                >
                  {(close) => (
                    <div className={style.cardItemUpdationDiv}>
                      <div>
                        <textarea
                          className={style.titleForItemField}
                          type="text"
                          placeholder={todoList.nameOfCardItem}
                          value={updatedNameOfCardItem}
                          rows={3}
                          onChange={(e) =>
                            setUpdatedNameOfCardItem(e.target.value)
                          }
                        ></textarea>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            handleUpdationOfCartItem(todoList.cardItemId, close)
                          }
                          className={style.updateCardItemBtn}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          ))}
        </section>

        <footer>
          <div>
            {addItem && (
              <AddItem
                setAddItem={setAddItem}
                handleAddCardItem={handleAddCardItem}
              />
            )}
          </div>
          {!addItem && (
            <div className={style.addCartItem}>
              <div>
                <button
                  onClick={handleOpenAddItemBox}
                  className={style.addCardBtn}
                >
                  <AddIcon
                    sx={{ marginBottom: "-5px", paddingRight: "4px" }}
                    fontSize="small"
                    color="#B7BCC7"
                  />
                  Add a card
                </button>
              </div>
              <div>
                <RollerShadesClosedOutlinedIcon
                  fontSize="small"
                  color="disabled"
                />
              </div>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}

export default AddTodo;
