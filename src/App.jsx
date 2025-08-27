import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import CreateListing from "./components/CreateListing";
import ItemDetail from "./components/pages/ItemDetail";
import About from "./components/pages/About";
import Loading from "./components/Loading";

const API_URL = "http://localhost:3000/items";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  // GET local items on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to load items");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // POST new item and update UI immediately after server returns created object
  async function addItem(formData) {
    const payload = { ...formData, source: "local" };
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Failed to create item");
    const created = await res.json();

    // Persist & update UI: prepend new item
    setItems(prev => [created, ...prev]);
    return created;
  }

  if (loading) return <Loading />;
  if (error)   return <div className="container error">Error: {error}</div>;

  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/new" element={<CreateListing onAddItem={addItem} />} />
          <Route path="/items/:id" element={<ItemDetail items={items} />} />
          <Route path="/about" element={<About />} />
          {/* fallback (optional) */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
    </>
  );
}
