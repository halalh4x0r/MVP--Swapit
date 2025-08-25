import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.description}</p>
        <Link to={`/items/${item.id}`} className="mt-2 inline-block text-blue-400 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
}
