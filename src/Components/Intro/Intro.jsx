import React from 'react'
import LOGO from '../../Images/logo.png'
function Intro() {
  return (
    <>
    <div>
   
    <div class="w-full " >
      
    <div class="w-full h-screen flex flex-col items-center justify-between bg-[#0b482f]  py-8">
        <div class="flex-1 flex flex-col items-center justify-center">
            <div>
                <img 
                className='w-60 rounded-lg '
                src={LOGO} />
            </div>
            <div class=" bg-opacity-10 px-4 py-2 mt-2 rounded-xl flex items-center justify-center space-x-2 lg:space-x-4">
                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 lg:h-8 xl:h-10 w-6 lg:w-8 xl:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                </svg> */}
               <div> 
                <h5 class="text-4xl lg:text-5xl xl:text-7xl text-white  font-semibold">NHÀ CỦA LẠC</h5>
                <span className='flex items-center justify-center text-sm text-gray-300 lg:text-xl xl:text-xl italic text-center'>Coffee . Milk Tea . Cake</span>
                </div>
            </div>
            <h1 class="text-xl lg:text-2xl xl:text-4xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
               13/06/2023
                </h1>
            <h1 class="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
                Coming Soon
                </h1>
            <div class="flex flex-col items-center space-y-4 mt-24">
                
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
         
        </div>
    </div>
</div>
    </div>
    </>
  )
}

export default Intro