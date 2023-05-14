import AddTodo from "./Components/add_todo/AddTodo";
import "./App.css";
import AddList from "./Components/add_list/AddList";
import Navbar from "./Components/Navbar/Navbar";
import { list, wallpaper } from "./recoil/description_atoms/DescriptionAtoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DemoDetails from "./DemoDetails";
import DescriptionModel from "./Components/Description/Description";
import Customisation from "./customisation/Customisation";


function App() {
  const [listData, setListData] = useRecoilState(list);
  const bgWallpaper=useRecoilValue(wallpaper)
  useEffect(() => {
    if (listData.length != 0) {
      localStorage.setItem("listData", JSON.stringify(listData));
      console.log('useEffect running')
    }
  }, [listData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kanban />} />
        <Route path="/task/:id" element={<DescriptionModel />} />
        <Route path="/cus" element={<Customisation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Kanban() {
  const bgWallpaper=useRecoilValue(wallpaper) 
  return (
    <>
      <div className="App" style={{backgroundImage:`url(${bgWallpaper} )`}}>
        <Navbar />
        <div className="content">
          <AddList />
        </div>
      </div>
    </>
  );
}
