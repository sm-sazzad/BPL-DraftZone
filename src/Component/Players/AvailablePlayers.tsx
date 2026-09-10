import type { PlayersType } from "../../Type";
import PlayerCard from "./PlayerCard";

export interface AvailablePlayersProps {
    players: PlayersType[];
}

const AvailablePlayers = ({ players }: AvailablePlayersProps) => {
    return (
        <div className="grid grid-cols-3 gap-3 ">
            {
                players.map((player, indx) =>
                    <PlayerCard player={player} key={indx} />
                )
            }
        </div>
    );
};

export default AvailablePlayers;