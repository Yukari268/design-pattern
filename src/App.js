import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Interpreter from "./Pages/Demo/Interpreter/Interpreter";
import { Prototype }from "./Pages/Demo/Prototype/Prototype";
import { Singleton }from "./Pages/Demo/Singleton/Singleton";
import { Flyweight }from "./Pages/Demo/Flyweight/Flyweight";
import { Iterator }from "./Pages/Demo/Iterator/Iterator";
import { Mediator }from "./Pages/Demo/Mediator/Mediator";
import { Observer }from "./Pages/Demo/Observer/Observer";
import { TemplateMethod }from "./Pages/Demo/TemplateMethod/TemplateMethod";

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
          <Route path='/interpreter' element={<Interpreter/>}></Route>
          <Route path='/prototype' element={<Prototype/>}></Route>
          <Route path='/singleton' element={<Singleton/>}></Route>
          <Route path='/flyweight' element={<Flyweight/>}></Route>
          <Route path='/iterator' element={<Iterator/>}></Route>
          <Route path='/mediator' element={<Mediator/>}></Route>
          <Route path='/observer' element={<Observer/>}></Route>
          <Route path='/template_method' element={<TemplateMethod/>}></Route>
        </Routes>
      </div>
    // <HomePage></HomePage>
  );
}



export default App;
