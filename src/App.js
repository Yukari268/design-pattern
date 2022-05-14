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


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
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
    </Router>
    // <HomePage></HomePage>
  );
}



export default App;
