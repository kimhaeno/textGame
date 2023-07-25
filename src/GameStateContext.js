import React, { createContext, useState, useContext } from 'react';
import events from './EventList.json';

const GameStateContext = createContext();

export function useGameState() {
  return useContext(GameStateContext);
}

export function GameStateProvider({ children }) {
  const [gameState, setGameState] = useState({
    "name1": "character1",
    "name2": "character2",
    "waters": [10, 10],
    "dwaters": [0, 0],
    "foods": [10, 10],
    "dfoods": [0, 0],

    "action": "none",
    "water": 10,
    "food": 10,
    "day": 1,
    "news": "Welcome to the game!",
    "event": events[0],
  });

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
}
