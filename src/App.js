import AddTodo from "./Components/AddTodo/AddTodo";
import "./App.css";
import AddList from "./Components/AddList/AddList";
import Navbar from "./Components/Navbar/Navbar";

import { list } from "./Recoil/DescriptionAtoms/DescriptionAtoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import {BrowserRouter, Routes,Route } from "react-router-dom";
// import DemoDetails from "./DemoDetails";
import DescriptionModel from "./Components/Description/Description";




function App() {
  const [listData, setListData] = useRecoilState(list);

  useEffect(() => {
    if (listData.length != 0) {
      localStorage.setItem("listData", JSON.stringify(listData));

    }
  }, [listData]);

  return (
   < BrowserRouter>
      <Routes>
        <Route path="/" element={<Kanban />} />
        {/* <Route path="/task/:id" element={<DemoDetails />} /> */}
        <Route path="/task" element={<DescriptionModel />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;

function Kanban() {
  return(
    <>
 <div className="App">
      <Navbar />
      <div className="content">
        <AddList />
       
      </div>
    </div>
    </>
  )
}
