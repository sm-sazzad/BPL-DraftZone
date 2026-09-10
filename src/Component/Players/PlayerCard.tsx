import type { PlayersType } from "../../Type";

interface PlayerCardProps {
    player: PlayersType;
}

const PlayerCard = ({ player }: PlayerCardProps) => {
    return (
        <div className="group card bg-white w-full max-w- rounded- shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500">

            {/* Image Section */}
            <figure className="relative h-72 w-full overflow-hidden bg-gray-100">
                <img
                    src={player.playerimg}
                    alt={player.PlayerName}
                    className="h-full w-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    {player.playerType}
                </div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {player.origin}
                </div>
            </figure>

            <div className="card-body p-6">
                {/* Name & Origin */}
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-2xl font-black text-gray-900 leading-none">
                        {player.PlayerName}
                    </h2>
                    <span className="text-xl">🇧🇩</span> {/* origin onujayi flag logic dite paro */}
                </div>

                {/* Batting / Bowling Style */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-2xl p-3">
                        <p className="text- text-gray-400 font-bold uppercase tracking-widest">Batting</p>
                        <p className="text-sm font-semibold text-gray-800 mt-1">{player.battingStyle}</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-3">
                        <p className="text- text-gray-400 font-bold uppercase tracking-widest">Bowling</p>
                        <p className="text-sm font-semibold text-gray-800 mt-1">{player.bowlingStyle}</p>
                    </div>
                </div>

                <div className="divider my-2 opacity-20"></div>

                {/* Price & Action */}
                <div className="flex card-actions justify-between items-center mt-1">
                    <div>
                        <p className="text- text-gray-400 font-bold uppercase tracking-widest">Price</p>
                        <h3 className="text-xl font-black text-gray-900">${player.Price}</h3>
                    </div>
                    <button className="btn bg-gray-900 hover:bg-black text-white rounded-full px-7 border-none shadow-lg shadow-gray-900/20 group-hover:bg-violet-600 transition-colors duration-300">
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;