// src/routes/Admin.jsx

import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ category_id: '', name: '', description: '', img: '' });

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));

    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newProduct) => setProducts([...products, newProduct]))
      .catch((error) => console.error('Error adding product:', error));
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <select name="category_id" onChange={handleChange} value={form.category_id}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          value={form.name}
        />
        <textarea
          name="description"
          placeholder="Product Description"
          onChange={handleChange}
          value={form.description}
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          onChange={handleChange}
          value={form.img}
        />
        <button type="submit">Add Product</button>
      </form>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
