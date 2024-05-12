import { useState } from 'react';

const TeamListItems = ({teamFighter, handleFighter, fighter}) => {
        return (
            <>
            
            <li>
                
                <div className="fighter">
                    <p>{teamFighter.image}</p>
                    <p>Name: {teamFighter.name}</p>
                    <p>Price: ${teamFighter.price}.00</p>
                    <p>Strength: {teamFighter.strength}</p>
                    <p>Agility: {teamFighter.agility}</p>
                    <button onClick={() => handleFighter(fighter)}>Remove {teamFighter.name}</button>
                </div>
            </li>
            </>
        );
    }

    export default TeamListItems;