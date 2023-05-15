import AddTodo from "./Components/add_todo/AddTodo";
import "./App.css";
import AddList from "./Components/add_list/AddList";
import Navbar from "./Components/Navbar/Navbar";
import { list, wallpaper } from "./recoil/description_atoms/DescriptionAtoms";
import { useRecoilState ,useRecoilValue} from "recoil";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DemoDetails from "./DemoDetails";
import DescriptionModel from "./Components/Description/Description";
import Customisation from "./customisation/Customisation";


function App() {
  const [listData, setListData] = useRecoilState(list);
  const [bgWallpaper,setBgWallpaper]=useRecoilState(wallpaper)
  let bgWallpaperFromLocal=localStorage.getItem('userWallpaper') || ''
  useEffect(() => {
    if (listData.length != 0) {
      localStorage.setItem("listData", JSON.stringify(listData));
      // console.log('useEffect running')
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
  const bgWallpaper=useRecoilValue(wallpaper) 
  return (
    <>
      <div className="App" style={{backgroundImage:`url(${bgWallpaper})`}}>
   
      {/* <div className="App" style={{backgroundImage:`url(bcgImg.png)`}}> */}
        <Navbar />
        <div className="content">
          <AddList />
        </div>
      </div>
    </>
  );
}
