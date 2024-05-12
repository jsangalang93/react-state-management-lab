import { useState } from 'react';

import './App.css';
import FighterListItems from './components/ZombieFighters/ZombieFighters';
import TeamListItems from './components/Team/Team.jsx';

const App = () => {

const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
const zombieFighters = (
  [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
)

const handleFighter = (fighter) => {

  setTeam([fighter]);
  money < fighter.price ? 
  alert("get more money") : setTeam([...team, fighter]);
      setMoney(money - fighter.price)
  
  console.log(team)
  console.log(money)
  
}

  return (
    <>
    <h1>ReactVille Zombie Invasion</h1>
    <p>Current balance: ${money}.00</p>
    
    <ul>
      {zombieFighters.map((fighter) => (
        <FighterListItems 
        key={fighter.name} 
        fighter={fighter}
        handleFighter={handleFighter}
         />
      ))}
    </ul>
    <h1>Your Current Team</h1>
    <ul>
      {team.map((teamFighter) => (
        <TeamListItems
        key={teamFighter.name}
        teamFighter={teamFighter}
        />
        
      ))}
    </ul>
    
    </>
  );
  
}

export default App;
