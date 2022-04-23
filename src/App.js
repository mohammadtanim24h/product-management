import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import AddProducts from "./components/AddProducts/AddProducts";
import ManageProducts from "./components/ManageProducts/ManageProducts";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/addproducts" element={<AddProducts></AddProducts>}></Route>
                <Route path="/manage" element={<ManageProducts></ManageProducts>}></Route>
            </Routes>
        </div>
    );
}

export default App;
