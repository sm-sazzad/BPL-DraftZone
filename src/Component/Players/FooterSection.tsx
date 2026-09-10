
import footer from '../../assets/logo-footer.png'

const FooterSection = () => {
    return (
        <div className="relative">

            <div className='absolute left-1/2 -translate-x-1/2  w-[90%] md:w-[70%] mx-auto -my-40 p-8 md:p-16 rounded-4xl bg-linear-to-br from-blue-50 via-white to-orange-100/70 border border-gray-300 ring-8 ring-gray-50/50 shadow-sm flex flex-col items-center justify-center text-center overflow-hidden'>

                {/* Heading and Text */}
                <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight'>
                    Subscribe to our Newsletter
                </h1>
                <p className='text-gray-500 mb-8 text-base md:text-lg'>
                    Get the latest updates and news right in your inbox!
                </p>

                {/* Input and Button Section */}
                <div className='flex flex-col sm:flex-row items-center bg-white rounded-xl p-1 shadow-sm border border-gray-200 w-full max-w-125'>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        className='flex-1 w-full px-5 py-3.5 text-gray-700 bg-transparent outline-none placeholder-gray-400 text-sm'
                    />
                    <button
                        className='w-full sm:w-auto mt-2 sm:mt-0 px-7 py-3.5 bg-linear-to-r from-pink-400 via-orange-400 to-yellow-400 text-gray-900 font-semibold rounded-lg hover:opacity-90 active:scale-95 transition-all duration-200 text-sm'
                    >
                        Subscribe
                    </button>
                </div>

            </div>


            <div className=" bg-[#06091A] text-white mt-60 pt-50 pb-10">
                <div className=" mx-auto flex flex-col items-center">

                    {/* Logo Section */}
                    <img src={footer} alt="Footer Logo" className="w-36 mb-12" />

                    {/* Main Content Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 w-full max-w-[80%]'>

                        {/* 1. About Us */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h1 className="font-bold text-lg uppercase mb-4 tracking-wider">About Us</h1>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                We are a passionate team dedicated to providing the best services to our customers.
                            </p>
                        </div>

                        {/* 2. Quick Links */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h1 className="font-bold text-lg uppercase mb-4 tracking-wider">Quick Links</h1>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 text-sm hover:text-[#E7FE29] transition-colors duration-200">Home</a></li>
                                <li><a href="#" className="text-gray-400 text-sm hover:text-[#E7FE29] transition-colors duration-200">Service</a></li>
                                <li><a href="#" className="text-gray-400 text-sm hover:text-[#E7FE29] transition-colors duration-200">About</a></li>
                                <li><a href="#" className="text-gray-400 text-sm hover:text-[#E7FE29] transition-colors duration-200">Contact</a></li>
                            </ul>
                        </div>

                        {/* 3. Subscribe */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                            <h1 className="font-bold text-lg uppercase mb-4 tracking-wider">Subscribe</h1>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
                                Subscribe to our newsletter for the latest updates.
                            </p>

                            {/* Input & Button Box */}
                            <div className="flex w-full max-w-sm rounded-lg overflow-hidden border border-gray-700 focus-within:border-[#E7FE29] transition-colors duration-200">
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className="w-full px-4 py-3 text-sm text-white bg-[#0f1428] outline-none placeholder-gray-500"
                                />
                                <button className="bg-[#E7FE29] text-black px-6 py-3 text-sm font-bold hover:bg-yellow-300 active:scale-95 transition-all duration-200 whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Border / Copyright (Optional but looks professional) */}
                    <div className="w-full border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-500">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </div>

                </div>
            </div>









        </div>
    );
};

export default FooterSection;