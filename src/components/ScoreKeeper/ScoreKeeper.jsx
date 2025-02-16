import React, { useState } from 'react';

function ScoreKeeper() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const incrementA = () => setScoreA(prev => prev + 1);
  const decrementA = () => setScoreA(prev => prev - 1);
  const incrementB = () => setScoreB(prev => prev + 1);
  const decrementB = () => setScoreB(prev => prev - 1);
  const reset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-700 to-blue-700 rounded-3xl shadow-xl transform transition-all hover:scale-105">
      <h2 className="text-5xl font-bold mb-8 text-white tracking-wider">Team Score Tracker</h2>
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-4 text-white">Team A</h3>
          <div className="text-8xl font-bold text-white mb-6 animate-pulse">
            {scoreA}
          </div>
          <div className="flex gap-4">
            <button
              onClick={decrementA}
              className="flex-1 px-8 py-4 bg-red-700 text-white rounded-2xl hover:bg-red-800 transition-all hover:shadow-xl active:scale-95"
            >
              <span className="text-2xl">➖ Decrease</span>
            </button>
            <button
              onClick={incrementA}
              className="flex-1 px-8 py-4 bg-green-700 text-white rounded-2xl hover:bg-green-800 transition-all hover:shadow-xl active:scale-95"
            >
              <span className="text-2xl">➕ Increase</span>
            </button>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-4 text-white">Team B</h3>
          <div className="text-8xl font-bold text-white mb-6 animate-pulse">
            {scoreB}
          </div>
          <div className="flex gap-4">
            <button
              onClick={decrementB}
              className="flex-1 px-8 py-4 bg-red-700 text-white rounded-2xl hover:bg-red-800 transition-all hover:shadow-xl active:scale-95"
            >
              <span className="text-2xl">➖ Decrease</span>
            </button>
            <button
              onClick={incrementB}
              className="flex-1 px-8 py-4 bg-green-700 text-white rounded-2xl hover:bg-green-800 transition-all hover:shadow-xl active:scale-95"
            >
              <span className="text-2xl">➕ Increase</span>
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={reset}
        className="mt-8 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-950 transition-all hover:shadow-xl active:scale-95"
      >
        Reset All Scores
      </button>
    </div>
  );
}

export default ScoreKeeper;
