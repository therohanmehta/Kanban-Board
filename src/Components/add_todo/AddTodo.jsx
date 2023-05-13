//Chandra Bhan

import React, { useEffect, useState } from "react";
import style from "./AddTodo.module.css";
import AddIcon from "@mui/icons-material/Add";
import RollerShadesClosedOutlinedIcon from "@mui/icons-material/RollerShadesClosedOutlined";
import AddItem from "../../atoms/add_item/AddItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { v4 as uuid } from "uuid";
import Popup from "reactjs-popup";
import CustomizedDialogs from "../description/Description";
import { useNavigate } from "react-router-dom";
import {
  showDialog,
  uidOfListItem,
  atomListUid,
  atomCardName,
} from "../../recoil/description_atoms/DescriptionAtoms";
import { useRecoilState } from "recoil";
import { list } from "../../recoil/description_atoms/DescriptionAtoms";
import { getData } from "../../utils/Services";
import MorePopOver from "./more/More";

function AddTodo({ listName, listId }) {
  let data = getData();
  let tasks = [];
  let currentList = data.find((ele) => ele.ListId == listId);
  if (currentList != undefined) {
    tasks = currentList.tasks ? currentList.tasks : [];
  }

  const navigate = useNavigate();
  const [todoname, setTodoName] = useState(listName);
  const [addItem, setAddItem] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(showDialog);
  const [uidOfListItem1, setUidOfListItem1] = useRecoilState(uidOfListItem);
  const [updatedNameOfCardItem, setUpdatedNameOfCardItem] = useState("");
  const [todoList, setTodoList] = useState(tasks);
  const [listData, setListData] = useRecoilState(list);
  const [cardName, setCardName] = useRecoilState(atomCardName);
  const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
  const handleOpenAddItemBox = () => {
    setAddItem(true);
  };
  const handleAddCardItem = (nameOfCardItem) => {
    const tempDataOfCard = {
      cardItemId: uuid(),
      nameOfCardItem: nameOfCardItem,
      description: "",
      comment: [],
      activity: [],
    };
    let tempListData = listData.map((list) => {
      if (list.ListId == listId) {
        console.log(listId);
        return {
          ListId: list.ListId,
          nameOfList: list.nameOfList,
          tasks: [...todoList, tempDataOfCard],
        };
      }
      return list;
    });

    setTodoList([...todoList, tempDataOfCard]);
    setListData([...tempListData]);
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

  function handleDelete() {
    const updatedList = listData.filter((ele) => ele.ListId !== listId);
    setListData(updatedList);
    console.log(listData);
  }

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
            <MorePopOver func={handleDelete} listID={listId} />
          </div>
        </header>
        <section>
          {todoList.map((todoList) => (
            <div
              className={style.itemOfCardDiv}
              key={todoList.cardItemId}
              onClick={() => {
                setUidOfListItem1(todoList.cardItemId);
                setCurrentListUid(listId);
                const test = todoList.cardItemId;
                setCardName(todoList.nameOfCardItem);
                console.log(cardName);
                navigate(`/task/:${test}`);
              }}
            >
              <div>{todoList.nameOfCardItem}</div>
              {/* <CustomizedDialogs
                nameCardItem={todoList.nameOfCardItem}
                isOpen={isOpen}
              /> */}
              <div className={style.btnWrapper}>
                <Popup
                  trigger={
                    <div>
                      <button className={style.editBtn}>
                        <EditOutlinedIcon fontSize="5px" />
                      </button>
                    </div>
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
