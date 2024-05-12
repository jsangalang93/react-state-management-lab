import { useState } from 'react';



const FighterListItems = ({fighter, handleFighter}) => {

    return (
        <>
        
        <li>
            
            <div className="fighter">
                <p>{fighter.image}</p>
                <p>Name: {fighter.name}</p>
                <p>Price: ${fighter.price}.00</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleFighter(fighter)}>Add to your team</button>
            </div>
        </li>
        </>
    );
};

export default FighterListItems;