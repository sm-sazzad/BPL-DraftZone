import banner from '../assets/bg-shadow.png';
import bannerimg from '../assets/banner-main.png';

const Banner = () => {
    return (
        <div className="relative mx-auto my-5 w-[90%]">
            <img
                src={banner}
                alt="Banner"
                className="w-full rounded-3xl bg-black"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <img
                    src={bannerimg}
                    alt=""
                    className="mb-4"
                />

                <h1 className="text-2xl font-bold md:text-4xl">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>

                <p className="mt-2 text-sm md:text-lg">
                    Beyond Boundaries Beyond Limits
                </p>

                <button className="mt-5 rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300">
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Banner;