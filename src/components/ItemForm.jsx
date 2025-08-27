import { useState } from "react";

const initial = {
  title: "",
  price: "",
  condition: "Good",
  category: "Electronics",
  image: "",
  description: "",
  seller: "",
  location: ""
};

export default function ItemForm({ onSubmit }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  function update(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === "price" ? value.replace(/[^\d.]/g, "") : value }));
  }

  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (form.price === "" || isNaN(Number(form.price))) e.price = "Valid price required";
    if (!form.image.trim()) e.image = "Image URL is required";
    if (!form.seller.trim()) e.seller = "Seller name is required";
    if (!form.location.trim()) e.location = "Location is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    const payload = {
      ...form,
      price: Number(form.price),
      description: form.description.trim(),
      source: "local"
    };

    await onSubmit(payload);
    setForm(initial); // reset after success
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>
        Title
        <input name="title" value={form.title} onChange={update} placeholder="e.g., Used iPhone 12" />
        {errors.title && <span className="error">{errors.title}</span>}
      </label>

      <label>
        Price (KSh)
        <input name="price" value={form.price} onChange={update} inputMode="decimal" />
        {errors.price && <span className="error">{errors.price}</span>}
      </label>

      <label>
        Condition
        <select name="condition" value={form.condition} onChange={update}>
          <option>New</option>
          <option>Like New</option>
          <option>Good</option>
          <option>Fair</option>
        </select>
      </label>

      <label>
        Category
        <select name="category" value={form.category} onChange={update}>
          <option>Electronics</option>
          <option>Home</option>
          <option>Fashion</option>
          <option>Sports</option>
          <option>Other</option>
        </select>
      </label>

      <label>
        Image URL
        <input name="image" value={form.image} onChange={update} placeholder="https://..." />
        {errors.image && <span className="error">{errors.image}</span>}
      </label>

      <label>
        Description
        <textarea name="description" value={form.description} onChange={update} rows="4" />
      </label>

      <label>
        Seller
        <input name="seller" value={form.seller} onChange={update} />
        {errors.seller && <span className="error">{errors.seller}</span>}
      </label>

      <label>
        Location
        <input name="location" value={form.location} onChange={update} />
        {errors.location && <span className="error">{errors.location}</span>}
      </label>

      <button type="submit">Publish Listing</button>
    </form>
  );
}
