import AddTodo from "./Components/add_todo/AddTodo";
import "./App.css";
import AddList from "./Components/add_list/AddList";
import Navbar from "./Components/Navbar/Navbar";

import { list } from "./recoil/description_atoms/DescriptionAtoms";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
// import DemoDetails from "./DemoDetails";
import DescriptionModel from "./Components/Description/Description";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  const [listData, setListData] = useRecoilState(list);

  useEffect(() => {
    if (listData.length != 0) {
      localStorage.setItem("listData", JSON.stringify(listData));
      console.log("useEffect running");
    }
  }, [listData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kanban />} />
        <Route path="/task/:id" element={<DescriptionModel />} />
        {/* <Route path="/task" element={<DescriptionModel />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Kanban() {
  const [columns, setColumns] = useRecoilState(list);
  // const [listData, setListData] = useRecoilState(list);

  useEffect(() => {
    if (columns.length != 0) {
      localStorage.setItem("listData", JSON.stringify(columns));
      // console.log("useEffect running");
    }
  }, [columns]);

  return (
    <>
      <div className="App">
        <Navbar />
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          <div className="content">
            <AddList />
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

const onDragEnd = (result, columns, setColumns) => {
  console.log(result);
  if (!result.destination) {
    return;
  }
  const { source, destination } = result;
  if (result.type == "COLUMN") {
    // const column = columns[source.index];
    // console.log(source, destination);
    // console.log(columns);
    const copiedItems = JSON.parse(JSON.stringify(columns));
    // console.log(copiedItems);
    // console.log(destination.index);
    const [removed] = copiedItems.splice(source.index, 1);
    // console.log(copiedItems);
    // console.log(removed);
    const rem = JSON.parse(JSON.stringify(removed));
    copiedItems.splice(destination.index, 0, rem);
    // console.log(copiedItems);
    // console.log(copiedItems);
    setColumns([...copiedItems]);
    return;
  }

  console.log(source, destination);
  if (source.droppableId === destination.droppableId) {
    let dragedTaskList = columns.find(
      (list) => list.ListId == source.droppableId
    );
    if (dragedTaskList != undefined) {
      let taskList = JSON.parse(JSON.stringify(dragedTaskList.tasks));
      const [removedTask] = taskList.splice(source.index, 1);
      taskList.splice(destination.index, 0, removedTask);

      let updatedList = {
        ...dragedTaskList,
        tasks: [...taskList],
      };

      const updatedLists = columns.map((list) => {
        if (list.ListId == source.droppableId) {
          return updatedList;
        }
        return list;
      });
      setColumns([...updatedLists]);
    }
    // const current = [...columns[source.droppableId]];
    // const next = [...columns[destination.droppableId]];
    // const target = current[source.index];
    // console.log(current, next, target);
  }
};
