const db = require('../config/db');

// Get all scores
exports.getAllScores = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT sr.id, sr.round_type, sr.score, s.name AS shooter_name, m.name AS match_name
      FROM score_rounds sr
      JOIN shooters s ON sr.shooter_id = s.id
      JOIN matches m ON sr.match_id = m.id
    `);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching scores', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a score
exports.addScore = async (req, res) => {
  const { shooter_id, match_id, round_type, score } = req.body;

  if (!shooter_id || !match_id || !round_type || !score) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO score_rounds (shooter_id, match_id, round_type, score) VALUES ($1, $2, $3, $4) RETURNING *',
      [shooter_id, match_id, round_type, score]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding score', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};