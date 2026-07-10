import {javascript, nodejs, react, mysql, tailwindcss} from '../../../assets/images/index';

function Skills() {
    return (
        <>

            {/* Container */}
            <div className='flex gap-3 flex-wrap'>

                {/* Sector */}
                <div className='w-fit flex gap-x-2 items-center bg-gray-200/90 p-4 rounded-lg '>
                    {/* Left */}
                    <div className='w-10 h-10 rounded-full outline-1 outline-black overflow-hidden'>
                        <img src={javascript} alt="" className='w-full h-full object-center object-cover rounded-full'/>
                    </div>
                    {/* Right */}
                    <span className='block'>JavaScript</span>
                </div>

                {/* Sector */}
                <div className='w-fit flex items-center gap-x-2 bg-gray-200/90 p-4 rounded-lg '>
                    {/* Left */}
                    <div className='w-10 h-10 rounded-full outline-1 outline-black overflow-hidden'>
                        <img src={react} alt="" className='w-full h-full object-center object-cover rounded-full'/>
                    </div>
                    {/* Right */}
                    <span className='block'>React</span>
                </div>

                {/* Sector */}
                <div className='w-fit flex items-center gap-x-2 bg-gray-200/90 p-4 rounded-lg '>
                    {/* Left */}
                    <div className='w-10 h-10 rounded-full outline-1 outline-black overflow-hidden'>
                        <img src={nodejs} alt="" className='w-full h-full object-center object-cover rounded-full'/>
                    </div>
                    {/* Right */}
                    <span className='block'>NodeJS</span>
                </div>

                {/* Sector */}
                <div className='w-fit flex items-center gap-x-2 bg-gray-200/90 p-4 rounded-lg '>
                    {/* Left */}
                    <div className='w-10 h-10 rounded-full outline-1 outline-black overflow-hidden'>
                        <img src={mysql} alt="" className='w-full h-full object-center object-cover rounded-full'/>
                    </div>
                    {/* Right */}
                    <span className='block'>MySQL</span>
                </div>

                {/* Sector */}
                <div className='w-fit flex items-center gap-x-2 bg-gray-200/90 p-4 rounded-lg '>
                    {/* Left */}
                    <div className='w-10 h-10 rounded-full outline-1 outline-black overflow-hidden'>
                        <img src={tailwindcss} alt="" className='w-full h-full object-center object-cover rounded-full'/>
                    </div>
                    {/* Right */}
                    <span className='block'>TailwindCSS</span>
                </div>

            </div>
        </>
    )
}

export default Skills