import React, { useEffect, useState } from 'react';
import api from '../api';

function ScoreList() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await api.get('/scores');
        setScores(response.data);
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };

    fetchScores();
  }, []);

  return (
    <div>
      <h2>Scores</h2>
      <ul>
        {scores.map((score) => (
          <li key={score.id}>
            {score.shooter_name} scored {score.score} in {score.round_type} for match {score.match_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreList;