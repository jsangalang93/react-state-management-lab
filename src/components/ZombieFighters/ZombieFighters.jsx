
const FighterListItems = ({fighter}) => {
    return (
        <li>
            <div className="zombie">
                <p>{fighter.image}</p>
                <p>name: {fighter.name}</p>
                <p>price: {fighter.price}</p>
                <p>strength: {fighter.strength}</p>
                <p>agility{fighter.agility}</p>
            </div>
        </li>
    );
};

export default FighterListItems;