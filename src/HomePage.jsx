import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Items Available for Swap</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => <ItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
