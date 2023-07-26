import React, { useEffect, useState } from 'react';
import { useGameState } from './GameStateContext';

function ManageChores() {
  // useState 훅을 사용하여 count 상태와 setCount 함수를 정의합니다.
  // count는 현재의 상태 값이며, setCount는 상태 값을 업데이트하는 함수입니다.

    const actions = ["explore", "study", "rest", "make"];

    const { gameState, setGameState } = useGameState();

    const [isActionSelect, setIsActionSelect] = useState([false, false, false]);

    useEffect(() => {
        console.log("Action: ", gameState.action);
        setIsActionSelect((prevState) => {
            const newArr = Array(actions.length).fill(false);
            if(gameState.action === "none")
                return newArr;
            newArr[actions.indexOf(gameState.action)] = true;
            return newArr;
        }
        );
    }, []);
    

    const selectAction = (actionIndex) => {
        const newArr = Array(actions.length).fill(false);
        newArr[actionIndex] = true;
        setIsActionSelect(newArr);
        console.log("IDX: ", actionIndex, actions[actionIndex])
        setGameState((prevState) => ({
            ...prevState,
            action: actions[actionIndex],
        }));
    }

    return (
        <div className='button-line' style={{alignSelf:"center"}}>
            {actions.map
                ((action, index) => (
                    <button
                        key={index}
                        onClick={() => selectAction(index)}
                        disabled={isActionSelect[index]}
                        style={{margin: "0.5rem", width: "5rem"}}
                    >
                        {action}

                    </button>
            ))}
        </div>
    );
}

export default ManageChores;
