import React from 'react'

function Education() {
    return (
        <>

            {/* Container */}
            <div className='flex flex-col gap-y-3'>
                {/* Sector */}
                <div className='w-full flex relative justify-between bg-gray-200/90 p-3 rounded-lg '>
                    {/* Left */}
                    <div>
                        <h2 className='uppercase font-bold text-sm sm:text-xl '>Computer Science</h2>
                        <p className='italic text-[12px] sm:text-base'>International Slavic University</p>
                    </div>
                    {/* Right */}
                    <div className='self-center pl-2 sm:pl-0'>
                        <span className='block text-[10px] sm:text-sm mb-1 text-end'>2022-2026</span>
                        <span className='block text-[10px] sm:text-sm'>Bitola, Macedonia</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Education