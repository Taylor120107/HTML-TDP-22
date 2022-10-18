const GameRoom = ({players}) => {
    const Display = ({playerName}) => <li> {playerName} </li>
    return(
        <ul>
            {players.map((playerName,index) => (
                <Display key={index} playerName={playerName}/>
            ))}
        </ul>
    )
}

export default GameRoom 