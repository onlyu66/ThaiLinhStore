import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Admin from "./components/pages/Admin/Admin";
import ProductsManagement from "./components/pages/Admin/Product/ProductsManagement";
import Dashboard from "./components/pages/Admin/Dashboard";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="product" element={<ProductsManagement />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
