const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'revendeoficial-db.cvm0gk664ik6.us-east-2.rds.amazonaws.com',
  database: 'revendeoficial-db',
  password: 'sEWs64LymysrMT',
  port: 5432,
});

app.get('/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

app.get('/categories', async (req, res) => {
  const result = await pool.query('SELECT * FROM categories');
  res.json(result.rows);
});

app.post('/products', async (req, res) => {
  const { category_id, name, description, img } = req.body;
  const result = await pool.query(
    'INSERT INTO products (category_id, name, description, img) VALUES ($1, $2, $3, $4) RETURNING *',
    [category_id, name, description, img]
  );
  res.json(result.rows[0]);
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { category_id, name, description, img } = req.body;
  const result = await pool.query(
    'UPDATE products SET category_id = $1, name = $2, description = $3, img = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *',
    [category_id, name, description, img, id]
  );
  res.json(result.rows[0]);
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM products WHERE id = $1', [id]);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
