import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Admin from "./components/pages/Admin/Admin";
import ProductsManagement from "./components/pages/Admin/Product/ProductsManagement";
import Dashboard from "./components/pages/Admin/Dashboard";
import Phones from "./components/layouts/Article/Phones";
import Article from "./components/layouts/Article/Article";
import Apple from "./components/layouts/Article/Apple";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Article />}></Route>
          <Route path="home" element={<Article />}></Route>
          <Route path="phones" element={<Phones />}></Route>
          <Route path="/phones/apple" element={<Apple />}></Route>
        </Route>
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
