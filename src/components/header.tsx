import React from 'react'
import {Rye as RyeFont} from 'next/font/google'
const rye = RyeFont({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
function Header() {
  return (
    <div className='w-full'>
            <div className="w-full h-[134px] bg-[#A29875] flex">
                <h1 className={`${rye.className} text-[#FFFFFF] leading-[93.75px] pt-5 pl-9 text-[75px]`}>MANZZARI</h1>
            </div>
    </div>
  )
}

export default Header


