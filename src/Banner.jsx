import React from 'react'
import logo from '../src/assets/logo.png'
import banner_footer from '../src/assets/banner_footer.png'

const Banner = () => {
    return (
        <div className='bg-banner bg-cover bg-no-repeat max-w-max_width mx-auto'>
            <div className='mx-auto max-sm:px-3 max-md:px-5 max-lg:px-8 lg:w-lgScreen xl:w-lgScreen 2xl:w-bigScreen'>
                <div className='flex items-center text-white justify-between pt-5 max-md:pt-3'>
                    <div className='max-lg:w-[30%]'>
                        <img src={logo} alt="here is a logo" />
                    </div>
                    <div className='lg:hidden sm:text-[30px]'>
                        <i class="fa-solid fa-xmark"></i>
                        <i class="fa-solid fa-bars-staggered"></i>
                    </div>
                    <div>
                        <ul className='max-lg:hidden lg:flex gap-x-10 capitalize font-bold font-ibm cursor-pointer'>
                            <li className='hover:text-primary_color'>home</li>
                            <li className='hover:text-primary_color'>activities<i class="fa-solid fa-chevron-down ml-2"></i></li>
                            <li className='hover:text-primary_color'>about us</li>
                            <li className='hover:text-primary_color'>latest news</li>
                            <li className='hover:text-primary_color'>contact</li>
                        </ul>
                    </div>
                    <div>
                        <button className='2xl:w-[200px] 2xl:h-[60px] xl:w-[160px] xl:h-[50px] max-xl:w-[120px] max-xl:h-[40px] max-sm:w-[80px] max-sm:h-[30px] max-sm:text-[12px] rounded-md font-ibm font-bold bg-primary_color'>Get Started</button>
                    </div>
                </div>





                <div className='lg:w-[750px] max-sm:w-[280px] lg:mt-[70px] max-lg:mt-[20px] mx-auto'>
                    <h1 className='text-white mx-auto text-center capitalize font-bold font-ibm lg:text-[52px] xl:text-[72px] max-sm:text-[22px] max-lg:text-[42px]'>experience the spirit of adventure sports</h1>
                </div>


                <div className='lg:gap-10 max-lg:gap-5 xl:mb-[100px] max-xl:mb-[20px] flex justify-center lg:mt-[30px] xl:mt-[50px] md:mt-[25px] max-md:mt-[15px]'>
                    <button className='lg:w-[200px] md:w-[120px] lg:h-[60px] md:h-[40px] max-sm:h-[30px] max-md:h-10 max-md:w-[120px] bg-primary_color text-white rounded-md xl:text-[20px] max-lg:text-[12px] font-bold font-ibm'>Explore Activities</button>
                    <button className='lg:w-[200px] md:w-[120px] lg:h-[60px] md:h-[40px] max-sm:h-[30px] max-md:h-10 max-md:w-[120px] bg-primary_color text-white rounded-md xl:text-[20px] max-lg:text-[12px] font-bold font-ibm'>Who We Are</button>
                </div>



            </div>

            <div className=''>
                <img src={banner_footer} alt="bg footer picture" />
            </div>

        </div>
    )
}

export default Banner