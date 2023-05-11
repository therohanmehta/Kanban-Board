import AddTodo from "./Components/AddTodo/AddTodo";
import "./App.css";
import AddList from "./Components/AddList/AddList";
import Navbar from "./Components/Navbar/Navbar";
import CustomizedDialogs from "./Components/Description/Description";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddList />
      <CustomizedDialogs />
    </div>
  );
}

export default App;
