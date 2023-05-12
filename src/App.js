import AddTodo from "./Components/AddTodo/AddTodo";
import "./App.css";
import AddList from "./Components/AddList/AddList";
import Navbar from "./Components/Navbar/Navbar";
import CustomizedDialogs from "./Components/Description/Description";
import { list } from "./Recoil/DescriptionAtoms/DescriptionAtoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

function App() {
  const [listData, setListData] = useRecoilState(list);

  useEffect(() => {
    if (listData.length != 0) {
      localStorage.setItem("listData", JSON.stringify(listData));

    }
  }, [listData]);

  return (
    <div className="App">

        <Navbar />
 
    
      <div className="content">
      <AddList />
      <CustomizedDialogs />
     </div>
    </div>
  );
}

export default App;
