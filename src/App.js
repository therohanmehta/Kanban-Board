import AddTodo from "./Components/add_todo/AddTodo";
import "./App.css";
import AddList from "./Components/add_list/AddList";
import Navbar from "./Components/Navbar/Navbar";

import { list } from "./recoil/description_atoms/DescriptionAtoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DemoDetails from "./DemoDetails";
import DescriptionModel from "./Components/Description/Description";

function App() {
  const [listData, setListData] = useRecoilState(list);
  const [bgWallpaper,setBgWallpaper]=useRecoilState(wallpaper)
  let bgWallpaperFromLocal=localStorage.getItem('userWallpaper') || ''
  useEffect(() => {
    if (listData.length != 0) {
      localStorage.setItem("listData", JSON.stringify(listData));
      console.log('useEffect running')
    }
    // setBgWallpaper( localStorage.getItem('userWallpaper')|| 'https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_1280.jpg')
    setBgWallpaper( localStorage.getItem('userWallpaper')|| 'bcgImg.png')

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
  return (
    <>
      <div className="App" style={{backgroundImage:`url(${bgWallpaper})`}}>
   
      {/* <div className="App" style={{backgroundImage:`url(bcgImg.png)`}}> */}
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
};
