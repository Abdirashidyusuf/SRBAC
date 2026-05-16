import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Receipts from "./pages/Receipts";
import Vendors from "./pages/Vendors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/products" element={<Products />} />

        <Route path="/customers" element={<Customers />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/receipts" element={<Receipts />} />

        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
