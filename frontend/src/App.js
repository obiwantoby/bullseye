import React from 'react';
import ShooterList from './components/ShooterList';
import MatchList from './components/MatchList';
import ScoreList from './components/ScoreList';

function App() {
  return (
    <div className="App">
      <h1>Bullseye Scorer</h1>
      <ShooterList />
      <MatchList />
      <ScoreList />
    </div>
  );
}

export default App;