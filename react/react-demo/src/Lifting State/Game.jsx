import {useState} from "React"

const Game = () => {
    const [playerName, setPlayerName]= useState ("");
    const[players,setPlayers]=useState([]);
}

const newPlayer = ({target}) => {
    setPlayerName(target.value);
}

const submitForm =(event) => {
    event.preventDefault();
}
const handleAdd = () => {
    setPlayers(players => [...players,playerName]);
    return(
        <>
        <AddGamers newPlayer={newPlayer} submitHandler={submitForm} handleAdd={handleAdd}/>
        <gameRoom players={players}/>
        </>
    );
}

export default Game