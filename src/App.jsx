import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import HomePage from "./HomePage";
import ItemDetail from "./ItemDetail";
import AddItemForm from "./AddItemForm";
import "./App.css"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/add" element={<AddItemForm />} />
        </Routes>
      </div>
    </Router>
  );
}
