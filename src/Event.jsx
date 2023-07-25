import React from 'react';
import { useGameState } from './GameStateContext';

function Event() {

    const { gameState, setGameState } = useGameState();


    return (
        <div className="Events">
            <h1>Events</h1>
            <h4>{gameState.event.name}</h4>
            <div>{gameState.event.description}</div>
            {
                gameState.event.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={
                            () => {
                                window.alert(option.description);
                    }}
                    >
                        {option.name}
                    </button>
                ))
            }
        </div>
    );
}


export default Event;