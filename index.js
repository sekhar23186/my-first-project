const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection pool (update with your local credentials)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Kalyan$1', // replace with your actual password
  port: 5432,
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Cursor + Node.js + PostgreSQL!');
});

// Sample endpoint: fetch users from 'users' table
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching users');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
