import type { Dispatch, SetStateAction } from "react";
import type { PlayersType } from "../../Type";
import PlayerCard from "./PlayerCard";

export interface AvailablePlayersProps {
    players: PlayersType[],
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: PlayersType[]
    setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>
}

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: AvailablePlayersProps) => {
    return (
        <div className="grid grid-cols-3 gap-3 ">
            {
                players.map((player, indx) =>
                    <PlayerCard player={player} key={indx} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                )
            }
        </div>
    );
};

export default AvailablePlayers;