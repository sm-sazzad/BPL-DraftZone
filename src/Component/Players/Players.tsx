import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayersType } from "../../Type";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayerPromiseProps {
    playerPromise: Promise<PlayersType[]>,
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}


const Players = ({ playerPromise, coin, setCoin }: PlayerPromiseProps) => {
    const players = use(playerPromise)


    const [selectedPlayers, setSelectedPlayers] = useState<PlayersType[]>([])

    const [buttonType, setButtonType] = useState<"available" | "selected">("available");

    const handleButtonType = (type: "available" | "selected") => {
        setButtonType(type);
    }
    return (
        // <div className="mx-auto w-[90%] max-w-7xl">
        //     <div className="my-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        //         {/* Title */}
        //         <div>
        //             <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
        //                 Available Players
        //             </h1>
        //             <p className="mt-1 text-sm text-gray-500">
        //                 Choose your favorite players for your team
        //             </p>
        //         </div>

        //         {/* Buttons */}
        //         <div className="flex w-full rounded-xl bg-gray-100 p-1 sm:w-auto">
        //             <button className="btn flex-1 rounded-lg border-0 bg-white px-6 text-gray-800 shadow-sm hover:bg-white sm:flex-none">
        //                 Available
        //             </button>

        //             <button className="btn flex-1 rounded-lg border-0 bg-transparent px-6 text-gray-500 hover:bg-white hover:text-gray-800 sm:flex-none">
        //                 Selected
        //             </button>
        //         </div>
        //     </div>

        //     {/* Players */}
        //     <AvailablePlayers players={players} />
        // </div>
        <div className="w-[88%] mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 my-10 bg-white/80 backdrop-blur-md py-6 md:p-8 rounded- shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">

                <div>
                    {
                        buttonType === "available" ?
                            (
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
                                        Available <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-indigo-600">Players</span>
                                    </h1>
                                    <p className="text-gray-500 mt-2 font-medium">Choose your best 11 to win the match</p>
                                </div>
                            )
                            : (
                                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
                                    Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-indigo-600">Players</span>
                                </h1>
                            )
                    }
                </div>

                {/* Toggle Buttons */}
                <div className="flex items-center p-1.5 bg-gray-100 rounded-full">
                    <button onClick={() => handleButtonType("available")}
                        className={`cursor-pointer rounded-full px-8  ${buttonType === "available" ? "bg-white text-gray-900 shadow-md shadow-gray-200 font-bold btn" : ""} `} >
                        Available
                    </button>
                    <button
                        onClick={() => handleButtonType("selected")}
                        className={`cursor-pointer rounded-full px-8  ${buttonType === "selected" ? "bg-white text-gray-900 shadow-md shadow-gray-200 font-bold btn" : ""}`}>
                        Selected <span className="ml-2 bg-gray-900 text-white text-xs px-2.5 py-1 rounded-full">{selectedPlayers.length}</span>
                    </button>
                </div>
            </div>

            {/* Players Grid */}
            <div className="pb-20">
                {
                    buttonType === "available" ?
                        <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} /> :
                        <SelectedPlayers coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setButtonType={setButtonType} />
                }
            </div>
        </div>
    );
};

export default Players;