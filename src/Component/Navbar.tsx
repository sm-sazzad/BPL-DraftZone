import { TbCoinFilled } from 'react-icons/tb';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif] flex w-[88%] mx-auto items-center justify-between py-4">
                <img src={logo} alt="" />

                <ul className="flex list-none items-center">
                    <li>
                        <a
                            href="#"
                            className="mx-1.25 px-4.5 py-1.25 text-[16px] text-black no-underline"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="mx-1.25 px-4.5 py-1.25 text-[16px] text-black no-underline"
                        >
                            Ficture
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="mx-1.25 px-4.5 py-1.25 text-[16px] text-black no-underline"
                        >
                            Team
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="mx-1.25 px-4.5 py-1.25 text-[16px] text-black no-underline"
                        >
                            Schedule
                        </a>
                    </li>

                    <span className="ml-2.5 rounded-[10px] border-2 border-black px-4 py-1.25 flex items-center gap-1">
                        Coin<TbCoinFilled className='text-yellow-400 text-[20px]' />
                    </span>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;