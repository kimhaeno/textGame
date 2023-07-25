import React, { useState } from 'react';
import { useGameState } from './GameStateContext';
import events from './EventList.json';

function ManageSupply() {
  // useState 훅을 사용하여 count 상태와 setCount 함수를 정의합니다.
  // count는 현재의 상태 값이며, setCount는 상태 값을 업데이트하는 함수입니다.

    const { gameState, setGameState } = useGameState();

    const addWater = (idx) => {
        if (gameState.water > gameState.dwaters[0] + gameState.dwaters[1]) {
          setGameState((prevState) => ({
            ...prevState,
            dwaters: prevState.dwaters.map((water, index) => (index === idx ? water + 1 : water)),
          }));
        }
      };
      
      const addFood = (idx) => {
        if (gameState.food > gameState.dfoods[0] + gameState.dfoods[1]) {
          setGameState((prevState) => ({
            ...prevState,
            dfoods: prevState.dfoods.map((food, index) => (index === idx ? food + 1 : food)),
          }));
        }
      };
      
      const subWater = (idx) => {
        if (gameState.dwaters[idx] > 0) {
          setGameState((prevState) => ({
            ...prevState,
            dwaters: prevState.dwaters.map((water, index) => (index === idx ? water - 1 : water)),
          }));
        }
      };
      
      const subFood = (idx) => {
        if (gameState.dfoods[idx] > 0) {
          setGameState((prevState) => ({
            ...prevState,
            dfoods: prevState.dfoods.map((food, index) => (index === idx ? food - 1 : food)),
          }));
        }
      };
      
      
    return (
        <div style={{alignSelf:"center"}}>
            <h1>Game: Day {gameState.day}</h1>
            <p>Currently left Water: {gameState.water} Food: {gameState.food}</p>
            <p>[Character1] Water: {gameState.waters[0]} Food: {gameState.foods[0]}</p>
            <p>Give {gameState.dwaters[0]} water and {gameState.dfoods[0]} food</p>
            <p>[Character2] Water: {gameState.waters[1]} Food: {gameState.foods[1]}</p>
            <p>Give {gameState.dwaters[1]} water and {gameState.dfoods[1]} food</p>
            <p>Click the buttons below to give water and food to the characters</p>


            <div>
                <p>For player 1:</p>
                <button onClick={() => addWater(0)}>+ water1</button>
                <button onClick={() => subWater(0)}>- water1</button>
                <button onClick={() => addFood(0)}>+ food1</button>
                <button onClick={() => subFood(0)}>- food1</button>
            </div>
            
            <div>
                <p>For player 2:</p>
                <button onClick={() => addWater(1)}>+ water2</button>
                <button onClick={() => subWater(1)}>- water2</button>
                <button onClick={() => addFood(1)}>+ food2</button>
                <button onClick={() => subFood(1)}>- food2</button>
            </div>
        </div>
    );
}

export default ManageSupply;
