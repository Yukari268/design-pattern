import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import MarkDownConverter from "./Pages/Demo/MarkdownConverter/Interpreter/MarkDownConverter";
import AvatarCreator from "./Pages/Demo/AvatarCreator/AvatarCreator";
import AlarmClock from "./Pages/Demo/AlarmClock/AlarmClock"


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/design-pattern' element={<HomePage/>}></Route>
          <Route path='/markdown-converter' element={<MarkDownConverter/>}></Route>
          <Route path='/avatar-creator' element={<AvatarCreator/>}></Route>
          <Route path='/simple-clock' element={<AlarmClock/>}></Route>
        </Routes>
      </div>
  );
}



export default App;
