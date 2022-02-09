import * as React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AddFoodItem from './components/AddFoodItem/AddFoodItem';
import ShowFoodItems from './components/ShowFoodItems/ShowFoodItems';
import AddStudent from './components/AddStudent/AddStudent';
import ShowStudents from './components/ShowStudents/ShowStudents';
import Distribution from './components/Distribution/Distribution';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
       <div className="container">
       <NavBar/> 
      <Routes>
      
        <Route path="/" element={<AddFoodItem/>} />
        <Route path="a" element={<ShowFoodItems />} />
        <Route path="c" element={<AddStudent />} />
        <Route path="students" element={<ShowStudents />} />
        <Route path="d" element={<Distribution />} />
        
      </Routes>
       </div>
      
    </BrowserRouter>
  );
}

export default App;
