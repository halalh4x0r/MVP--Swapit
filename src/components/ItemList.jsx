import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  if (!items.length) return <p>No items yet. Be the first to list something!</p>;

  return (
    <div className="grid">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
