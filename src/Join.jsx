import React from 'react'
import riding from '../src/assets/riding.png'
import climb from '../src/assets/climb.png'
import arrayBg from '../src/assets/arrayBg.png'

const Join = () => {
    return (
        <div className='max-w-max_width mx-auto mb-10 mt-10'>
            <div className='mx-auto max-sm:px-3 max-md:px-5 max-lg:px-8 lg:w-lgScreen xl:w-lgScreen 2xl:w-bigScreen'>
                <div className='lg:flex lg:justify-between lg:gap-10 lg:items-center'>
                    <div className='lg:w-[595px] max-lg:mb-10 '>
                        <h4 className='font-yellowtali text-[#14B9F1] text-[30px] mb-1'>Feel The Excitement</h4>
                        <h2 className='font-ibm xl:text-[49px] lg:text-[35px] font-bold xl:leading-[70px] max-sm:text-[29px] max-xl:text-[50px] md:text-[54px] '>Join Us And Embark On New Adventures</h2>
                        <div className='w-[80px] h-[2px] bg-[#A0A0A0] mt-6 '></div>
                        <p className='font-ibm text-[18px] leading-6 mt-[30px] mb-10 '>Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.</p>

                        <p className='mb-3 max-sm:text-[13px] max-md:text-[18px] lg:text-[17px] '><i class="fa-regular fa-clock max-sm:mr-2 2xl:mr-4 max-sm:text-[13px] max-md:text-[18px] max-md:mr-3 lg:mr-4 lg:text-[18px] "></i>Unde omnis iste natus error sit voluptatem dolore</p>
                        <p className='mb-3 max-sm:text-[13px] max-md:text-[18px] lg:text-[17px] '><i class="fa-regular fa-clock max-sm:mr-2 2xl:mr-4 max-sm:text-[13px] max-md:text-[18px] max-md:mr-3 lg:mr-4 lg:text-[18px] "></i>Eaque ipsa quae ab illo inventore veritatis quasi que</p>
                        <p className='mb-3 max-sm:text-[13px] max-md:text-[18px] lg:text-[17px] '><i class="fa-regular fa-clock max-sm:mr-2 2xl:mr-4 max-sm:text-[13px] max-md:text-[18px] max-md:mr-3 lg:mr-4 lg:text-[18px] "></i>Accusantium dolore que laudantium totamrem periam</p>

                        <button className='mt-5 h-[60px] w-[200px] bg-primary_color rounded-md capitalize font-ibm font-bold text-[18px] text-white '>discover more</button>
                    </div>




                    <div className='items-center gap-4 flex'>
                        <div className='max-lg:w-[50%]'>
                            <img src={riding} alt="" />
                        </div>
                        <div className='max-lg:w-[50%]'>
                            <img src={climb} alt="" />
                        </div>
                    </div>
                </div>


                <div className='mt-10 flex gap-y-10 flex-wrap md:justify-between max-md:justify-around'>
                    <div className='w-[250px] h-[220px] max-sm:w-[45%] max-sm:h-[40%] bg-[#FFF4E5] rounded-md relative'>
                        <img src={arrayBg} alt="" />
                        <h3 className='right-0 left-[20%] top-[20%] text-[80px] max-sm:text-[40px] font-ibm font-bold absolute items-center'>10+</h3>
                        <p className='absolute top-[70%] left-[25%] max-sm:left-[18%] max-sm:text-[11px] font-ibm'>Sports Activities</p>
                    </div>


                    <div className='w-[250px] h-[220px] max-sm:w-[45%] max-sm:h-[40%] bg-[#E7FDE9] rounded-md relative'>
                        <img src={arrayBg} alt="" />
                        <h3 className='right-0 left-[20%] top-[20%] text-[80px] max-sm:text-[40px] font-ibm font-bold absolute items-center'>3k+</h3>
                        <p className='absolute top-[70%] left-[25%] max-sm:left-[18%] max-sm:text-[11px] font-ibm'>Registered Enthusiasts</p>
                    </div>


                    <div className='w-[250px] h-[220px] max-sm:w-[45%] max-sm:h-[40%] bg-[#F2F2FD] rounded-md relative'>
                        <img src={arrayBg} alt="" />
                        <h3 className='right-0 left-[20%] top-[20%] text-[80px] max-sm:text-[40px] font-ibm font-bold absolute items-center'>15+</h3>
                        <p className='absolute top-[70%] left-[25%] max-sm:left-[18%] max-sm:text-[11px] font-ibm'>Years Of Experience</p>
                    </div>


                    <div className='w-[250px] h-[220px] max-sm:w-[45%] max-sm:h-[40%] bg-[#FDF1F5] rounded-md relative'>
                        <img src={arrayBg} alt="" />
                        <h3 className='right-0 left-[20%] top-[20%] text-[80px] max-sm:text-[40px] font-ibm font-bold absolute items-center'>9.5</h3>
                        <p className='absolute top-[70%] left-[25%] max-sm:left-[18%] max-sm:text-[11px] font-ibm'>Average Rating</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join