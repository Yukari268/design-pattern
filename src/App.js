import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import MarkDownConverter from "./Pages/Demo/MarkdownConverter/Interpreter/MarkDownConverter";
import AvatarCreator from "./Pages/Demo/AvatarCreator/AvatarCreator";
import AlarmClock from "./Pages/Demo/AlarmClock/AlarmClock"

const ele = document.getElementsByClassName('project-list');
ele.scrollTop = 100;
ele.scrollLeft = 150;

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
  // Change the cursor and prevent user from selecting the text
  ele.style.cursor = 'grabbing';
  ele.style.userSelect = 'none';
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  // Scroll the element
  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
};


const mouseUpHandler = function () {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);

  ele.style.cursor = 'grab';
  ele.style.removeProperty('user-select');
};  

document.addEventListener("mousedown", mouseDownHandler);
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
