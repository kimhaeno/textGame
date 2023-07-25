import React from 'react';
import { useGameState } from './GameStateContext';
import Event from './Event';

function News() {

    const { gameState, setGameState } = useGameState();


    return (
        <div className="News">
            <h1>News</h1>
            <h3>{gameState.news}</h3>
            <h2><Event/></h2>
        </div>
    );
}


export default News;