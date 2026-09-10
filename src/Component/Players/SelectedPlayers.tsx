import type { Dispatch, SetStateAction } from "react";
import type { PlayersType } from "../../Type";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";


interface SelectedPlayersProps {
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: PlayersType[];
    setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>
    setButtonType: Dispatch<SetStateAction<"available" | "selected">>
}



const SelectedPlayers = ({ coin, setCoin, selectedPlayers, setSelectedPlayers, setButtonType }: SelectedPlayersProps) => {

    const handleRemoveButton = (player: PlayersType) => {
        const newSelectedPlayers = selectedPlayers.filter(remove => remove.PlayerName !== player.PlayerName);
        setSelectedPlayers(newSelectedPlayers);
        setCoin(coin + player.Price);
        toast.success(`${player.PlayerName} remove Successfully`)
    }


    return (
        <div className="grid gap-4">
            {
                selectedPlayers.length === 0 ?
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
                        No Players Selected.
                    </h1>
                    :
                    (selectedPlayers.map((player) => (
                        <div
                            className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md hover:border-gray-300"
                        >
                            {/* Left: Image + Info */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={player.playerimg}
                                    alt={player.PlayerName}
                                    className="h-16 w-16 rounded-full object-top object-cover ring-3 ring-[rgba(130,17,238,0.92)]"
                                />

                                <div className="flex flex-col">
                                    <h1 className="text-base font-semibold text-gray-800">
                                        {player.PlayerName}
                                    </h1>
                                    <h3 className="text-sm text-gray-500">{player.battingStyle}</h3>
                                </div>
                            </div>

                            {/* Right: Delete button */}
                            <button
                                onClick={() => handleRemoveButton(player)}
                                className=" rounded-full p-2 text-red-500 transition hover:bg-red-50 hover:text-red-600 active:scale-95"
                            >
                                <RiDeleteBin6Line className="text-xl" />
                            </button>
                        </div>
                    )))}
            <div>
                <button onClick={() => setButtonType("available")}
                    className="cursor-pointer flex items-center gap-2 rounded-lg bg-emerald-600 px-5 my-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95">
                    <FaPlus className="text-xs" />
                    Add Player
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayers;