import React from 'react'
import { Libre_Bodoni as LibreBodoniFont } from 'next/font/google'
import Image from 'next/image'
const Libre_Bodoni = LibreBodoniFont({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const Home = () => {
  return (
    <div className='w-full px-4 md:px-0'>
      <div className='flex flex-col md:flex-row h-auto md:h-[80%]'>
        <div className='w-full md:w-1/2 flex-col justify-center items-start'>
          <h1 className={`${Libre_Bodoni.className} mt-[50px] ml-0 md:ml-44 text-black w-full md:w-[496px] h-auto text-[24px] md:text-[40px] font-bold leading-[30px] md:leading-[65.8px] tracking-wide text-left`}>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className={`${Libre_Bodoni.className} mt-[28px] ml-0 md:ml-44 text-[#787054] w-full md:w-[902px] h-auto text-xl md:text-3xl font-medium leading-[30px] md:leading-[49.35px] tracking-wide `}>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
            <button className={`${Libre_Bodoni.className} mt-[50px] ml-0 md:ml-44 bg-[#A29875]  w-full md:w-72 h-[58px] p-[10px] rounded-[10px] gap-[10px]   text-[#FFFFFF] font-medium text-[24px] md:text-[30px] leading-[30px] md:leading-[37.5px] `}>Explore Now</button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <Image className='mt-16 rounded-tl-[150px] rounded-br-[150px] relative w-full max-w-[490px]'
           src="/images/figma-model.png"
           alt="main-back-img"
           width={490}
           height={667} />
           <Image className='mt-16 rounded-tl-[150px] rounded-br-[150px] border border-[#FFFFFF] absolute w-full max-w-[442px]'
           src="/images/figma-round.png"
           alt="main-img"
           width={442}
           height={611} />
        </div>
      </div>
    </div>
  )
}

export default Home;

// 1st className='mt-16 '
// 2nd mt-7 ml-6
