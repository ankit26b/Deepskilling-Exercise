import React from "react";

const MergedPlayers = ({players}) => {
    return(
        <div>
            {players.map((item, index)=>{
                return(
                    <li key={index}>{item}</li>
                )
            })}
        </div>
    )
}

export default MergedPlayers;