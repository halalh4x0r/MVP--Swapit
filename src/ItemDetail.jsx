import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/items/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  if (!item) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="container mx-auto p-6 text-white">
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-3xl font-bold">{item.title}</h2>
      <p className="text-gray-400 mt-2">{item.description}</p>
      <p className="mt-4 text-sm text-blue-400">Category: {item.category}</p>
    </div>
  );
}
