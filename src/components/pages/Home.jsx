import ItemList from "../ItemList";

export default function Home({ items }) {
  return (
    <>
      <h2>Latest Listings</h2>
      <ItemList items={items} />
    </>
  );
}
