import banner from '../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div className="mx-auto my-5 flex justify-center">
            <img src={banner} alt="Banner" className="bg-black rounded-3xl" />
        </div>
    );
};

export default Banner;