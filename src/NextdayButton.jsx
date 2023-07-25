import React, { useState } from 'react';
import { useGameState } from './GameStateContext';
import events from './EventList.json';


function NextDayButton () {

    const { gameState, setGameState } = useGameState();

    const nextDay = () => {

        var newWater = 0;
        var newFood = 0;

        var usedWaters = [0, 0];
        var usedFoods = [0, 0];

        if(gameState.action === "none"){
            window.alert("Please choose an action before saving the state.");
            return;

        }

        if(gameState.action === "explore"){

            if(gameState.waters[0] !== 0 && gameState.waters[1] !== 0){
                newWater = Math.floor(Math.random() * 5);
                newFood = Math.floor(Math.random() * 5);

                usedWaters = [1, 1];
                usedFoods = [1, 1];

                if(newWater === 0 && newFood === 0){
                    gameState.news = "OOPS! You got nuthin' from exploring. Try again tomorrow."
                }
                else{
                    gameState.news = "You got " + newWater + " water and " + newFood + " food from exploring."
                }
            }
            else{
                gameState.news = "You are DEHYDRATED. You got nuthin' from exploring."
            }

        }

        if(gameState.action === "study"){
            gameState.news = "You studied."
        }

        if(gameState.action === "rest"){
            gameState.news = "You rested."
        }


        setGameState((prevState) => ({
          ...prevState,
          action: "none",
          waters: [
            prevState.waters[0] + prevState.dwaters[0] - usedWaters[0],
            prevState.waters[1] + prevState.dwaters[1] - usedWaters[1],
          ],
          foods: [
            prevState.foods[0] + prevState.dfoods[0] - usedFoods[0],
            prevState.foods[1] + prevState.dfoods[1] - usedFoods[1],
          ],
          water: prevState.water - prevState.dwaters[0] - prevState.dwaters[1] + newWater,
          food: prevState.food - prevState.dfoods[0] - prevState.dfoods[1] + newFood,
          day: prevState.day + 1,
          dwaters: [0, 0],
          dfoods: [0, 0],
          event: events[Math.floor(Math.random() * events.length)],
        }));
      };
      

    const restart = () => {
        setGameState({
            ...gameState,
            day: 1,
            water: 10,
            food: 10,
            dwaters: [0, 0],
            dfoods: [0, 0],
            waters: [0, 0],
            foods: [0, 0],
            action: "none",
            news: "Welcome to the game!",
        });
    };
    
    return (
        <div className="button-line">
            <button onClick={nextDay} className='nextday-button'>next day</button>
            <button onClick={restart} className='nextday-button'>restart(ONLY FOR DEBUGGING)</button>
        </div>
    )
}

export default NextDayButton