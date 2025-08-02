import React, { useState } from "react";
import ListOfPlayers from "./components/ListOfPlayers";
import { OddPlayers } from "./components/OddPlayers";
import { IndianPlayers } from "./data/players";
import { EvenPlayers } from "./components/EvenPlayers";
import MergedPlayers from "./components/MergedPlayers";

const App = () => {
  
  const [flag, setFlag] = useState(false);

  const handleClick = ()=>setFlag(!flag);

  const players = [
    { name: 'Rohit', score: 45 },
    { name: 'Shubman', score: 52 },
    { name: 'Virat', score: 118 },
    { name: 'Shreyas', score: 80 },
    { name: 'Rahul', score: 31 },
    { name: 'Pandya', score: 18 },
    { name: 'Jadeja', score: 20 },
    { name: 'Kuldeep', score: 1 },
    { name: 'Siraj', score: 2 },
    { name: 'Bumrah', score: 0 },
    { name: 'Shami', score: 0 },
  ];


  const playersBelow70 = players.filter((item) => item.score < 70);

  return (
    <div>
      <h2>
        Indian Cricket App
      </h2>

      {flag ? (
        <>
          <h3>List of Players :</h3>
          <ListOfPlayers players={players} />

          <h3>Player with score less than 70</h3>
          <ListOfPlayers players={playersBelow70} />
        </>
      ) : (
        <>
          <h3>Odd Players :</h3>
          <OddPlayers players={IndianPlayers} />
          
          <h3>Even Players :</h3>
          <EvenPlayers players={IndianPlayers} />
          
          <h3>List of Indian Players Merged:</h3>
          <MergedPlayers players={IndianPlayers} />

          
        </>
      )}

      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App;
