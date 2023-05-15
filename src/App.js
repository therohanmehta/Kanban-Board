import AddTodo from "./Components/add_todo/AddTodo";
import "./App.css";
import AddList from "./Components/add_list/AddList";
import Navbar from "./Components/Navbar/Navbar";

import { useEffect, useState } from "react";
// import DemoDetails from "./DemoDetails";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Source } from "@mui/icons-material";
import { getData } from "./utils/Services";
import { list, wallpaper } from "./recoil/description_atoms/DescriptionAtoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DemoDetails from "./DemoDetails";
import DescriptionModel from "./Components/Description/Description";
import Customisation from "./customisation/Customisation";

function App() {
  const [listData, setListData] = useRecoilState(list);
  const [bgWallpaper, setBgWallpaper] = useRecoilState(wallpaper);
  let bgWallpaperFromLocal = localStorage.getItem("userWallpaper") || "";
  useEffect(() => {
    if (listData.length != 0) {
      localStorage.setItem("listData", JSON.stringify(listData));
      console.log("useEffect running");
      // console.log('useEffect running')
    }
    // setBgWallpaper( localStorage.getItem('userWallpaper')|| 'https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_1280.jpg')
    setBgWallpaper(localStorage.getItem("userWallpaper") || "bcgImg.png");
  }, [listData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kanban />} />
        <Route path="/task/:id" element={<DescriptionModel />} />
        <Route path="/customisation" element={<Customisation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Kanban() {
  const [columns, setColumns] = useRecoilState(list);
  const [count, setCount] = useState(0);
  // const [listData, setListData] = useRecoilState(list);

  useEffect(() => {
    if (columns.length != 0) {
      localStorage.setItem("listData", JSON.stringify(columns));
      // console.log("useEffect running");
      // const data = getData();
      // setColumns(data);
    }
  }, [columns]);

  const bgWallpaper = useRecoilValue(wallpaper);
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${bgWallpaper})` }}>
        {/* <div className="App" style={{backgroundImage:`url(bcgImg.png)`}}> */}
        <Navbar />
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(result, columns, setColumns, setCount, count)
          }
        >
          <div className="content">
            <AddList />
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

const onDragEnd = (result, columns, setColumns, setCount, count) => {
  console.log(result);
  if (!result.destination) {
    return;
  }
  const { source, destination } = result;

  // ! moving list
  if (result.type == "COLUMN") {
    const copiedItems = JSON.parse(JSON.stringify(columns));
    const [removed] = copiedItems.splice(source.index, 1);
    const rem = JSON.parse(JSON.stringify(removed));
    copiedItems.splice(destination.index, 0, rem);
    setColumns([...copiedItems]);
    setCount(count + 1);
    return;
  }

  // ! moving task to same list
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
          console.log("now ok");
          return updatedList;
        }
        return list;
      });
      console.log("udpated", updatedLists);
      setColumns(updatedLists);
      setCount(count + 1);
      return;
    }
  }

  // ! moving task to different list

  let sourceTaskList = columns.find(
    (list) => list.ListId == source.droppableId
  );
  let destinationTaskList = columns.find(
    (list) => list.ListId == destination.droppableId
  );

  const current = JSON.parse(JSON.stringify(sourceTaskList.tasks));
  const next = JSON.parse(JSON.stringify(destinationTaskList.tasks));
  const target = current[source.index];
  console.log(current, next, target);

  // * removing from original list
  current.splice(source.index, 1);

  // * inserting into next
  next.splice(destination.index, 0, target);

  // * merging the updated task in list
  const updatedLists = columns.map((list) => {
    if (list.ListId == source.droppableId) {
      return {
        ...list,
        tasks: current,
      };
    }
    if (list.ListId == destination.droppableId) {
      return {
        ...list,
        tasks: next,
      };
    }
    return list;
  });

  // ? adding the updatedList
  setColumns([...updatedLists]);
  setCount(count + 1);
};

//? completion drag and drop
