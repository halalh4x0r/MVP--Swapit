import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold text-blue-400">SwapIt</Link>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/add" className="hover:text-blue-400">Add Item</Link>
        </nav>
      </div>
    </header>
  );
}
