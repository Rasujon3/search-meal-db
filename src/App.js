import { Route, Routes } from "react-router-dom";
import "./App.css";
import Restaurant from "./components/Restaurant/Restaurant";
import SingleMeal from "./components/SingleMeal/SingleMeal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/restaurant/:mealId" element={<SingleMeal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
