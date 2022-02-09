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
       <div>
        <NavBar/> 
        <div className="container">
          <Routes className="container">
          
            <Route path="addFoodItem" element={<AddFoodItem/>} />
            <Route path="foodItems" element={<ShowFoodItems />} />
            <Route path="/" element={<AddStudent />} />
            <Route path="students" element={<ShowStudents />} />
            <Route path="distributionForm" element={<Distribution />} />
            
          </Routes>
        </div>
       </div>
      
    </BrowserRouter>
  );
}

export default App;
