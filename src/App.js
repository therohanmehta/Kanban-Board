import AddTodo from "./components/add_todo/AddTodo";
import "./App.css";
import AddList from "./components/add_list/AddList";
import Navbar from "./components/navbar/Navbar";

import { list } from "./recoil/description_atoms/DescriptionAtoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DemoDetails from "./DemoDetails";
import DescriptionModel from "./components/description/Description";

function App() {
  const [listData, setListData] = useRecoilState(list);

  useEffect(() => {
    if (listData.length != 0) {
      localStorage.setItem("listData", JSON.stringify(listData));
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
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <AddList />
        </div>
      </div>
    </>
  );
}
