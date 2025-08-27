import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  const { id, title, price, category, image } = item;
  return (
    <article className="card">
      <Link to={`/items/${id}`}>
        <img src={image} alt={title} />
        <div className="card-body">
          <h3>{title}</h3>
          <p className="price">KSh {Number(price).toLocaleString()}</p>
          <p className="meta">{category}</p>
        </div>
      </Link>
    </article>
  );
}
