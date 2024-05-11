import { useState } from 'react';


const FighterListItems = ({fighter}) => {
    const [team, setTeam] = useState([]);
    const [money, setMoney] = useState(100);
    const handleFighter = (fighter) => {
        setTeam([fighter])

        money < fighter.price ? 
        alert("get more money") : setTeam([...team, fighter]);
            setMoney(money - fighter.price)
        
        console.log(team)
        console.log(money)
        
      }

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