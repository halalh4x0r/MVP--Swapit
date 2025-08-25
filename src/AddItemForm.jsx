import { useState } from "react";

export default function AddItemForm() {
  const [formData, setFormData] = useState({ title: "", description: "", category: "", image: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).then(() => alert("Item added successfully!"));
  };

  return (
    <div className="container mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-md">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white" required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white" required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white" required />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white" required />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">Submit</button>
      </form>
    </div>
  );
}
