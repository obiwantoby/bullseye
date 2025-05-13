const db = require('../config/db');

// Get all matches
exports.getAllMatches = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM matches');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching matches', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a match
exports.addMatch = async (req, res) => {
  const { name, match_date, description, caliber } = req.body;

  if (!name || !match_date) {
    return res.status(400).json({ error: 'Name and Match Date are required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO matches (name, match_date, description, caliber) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, match_date, description, caliber]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding match', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};