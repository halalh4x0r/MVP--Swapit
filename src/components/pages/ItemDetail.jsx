import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:3001/items";

export default function ItemDetail({ items }) {
  const { id } = useParams();
  const numericId = Number(id);
  const cached = useMemo(() => items.find(i => i.id === numericId), [items, numericId]);

  const [item, setItem] = useState(cached);
  const [loading, setLoading] = useState(!cached);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cached) return; // already have it
    (async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Item not found");
        setItem(await res.json());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [cached, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!item) return <p>Item not found.</p>;

  return (
    <article className="detail">
      <img src={item.image} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p className="price">KSh {Number(item.price).toLocaleString()}</p>
        <p><strong>Condition:</strong> {item.condition}</p>
        <p><strong>Category:</strong> {item.category}</p>
        <p><strong>Seller:</strong> {item.seller} · {item.location}</p>
        <p>{item.description}</p>
        <p className="badge">Source: {item.source || "local"}</p>
      </div>
    </article>
  );
}
