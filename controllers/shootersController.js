const db = require('../config/db');

// Get all shooters
exports.getAllShooters = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM shooters');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching shooters', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a shooter
exports.addShooter = async (req, res) => {
  const { name, email } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO shooters (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding shooter', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};