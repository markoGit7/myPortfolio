import React, {useState, useEffect} from 'react'


function Contact() {

    const [copyMsg, setCopyMsg] = useState<boolean>(false);

    useEffect(() => {
        
        if(!copyMsg) return;
        
        const interval = setInterval(() => {
            
            setCopyMsg(false);

            clearInterval(interval);
        
        }, 2000);
    
    
      
    }, [copyMsg])
    

    return (
        <>
            <div className='bg-black absolute inset-0 shape-triangle hidden lg:block' />
            <div className='relative h-full z-2'>
                <h2 className='uppercase font-bold mb-10 text-white text-3xl lg:block hidden'>Get In Touch</h2>

                {/* Form */}
                <div className='w-full lg:w-1/2 h-auto rounded-lg mb-10 relative'>
                    
                    <h2 className='uppercase font-bold mb-10 text-white text-3xl lg:hidden block'>Get In Touch</h2>
                    <form >
                            
                        {/* Name */}
                        <div className='w-full mb-8'>
                            <label htmlFor="name"></label>
                            <input type="text" id='name' placeholder='Your Name' className='w-full rounded-lg h-10 bg-amber-200 border-none outline-none px-2' />
                        </div>

                        {/* Email */}
                        <div className='w-full mb-8'>
                            <label htmlFor="email"></label>
                            <input type="email" id='email' placeholder='Your Email' className='w-full rounded-lg h-10 bg-amber-200 border-none outline-none px-2' />
                        </div>
                    

                    
                        {/* Message */}
                        <div className='w-full mb-8 h-30'>
                            <textarea placeholder="Your Message"  id="" className='w-full rounded-lg bg-amber-200 px-2 pt-2 outline-none border-none resize-none h-full'></textarea>
                        </div>
                            
                        

                        {/* Button */}
                        <div className='w-full text-center lg:text-start '>
                            <button className='border-0 outline-0 min-w-30 min-h-12.5 relative group overflow-hidden uppercase font-semibold text-base rounded-lg'>
                                {/* Normal */}
                                <span className='absolute w-full h-full px-3 flex items-center justify-center top-0 left-0 bg-orange-400 group-hover:-top-full transition-all duration-300 ease-in-out'>Send</span>
                                {/* Hover */}
                                <span className='absolute w-full h-full px-3 flex items-center justify-center top-full left-0 bg-green-400 group-hover:top-0 transition-all duration-300 ease-in-out'>Send</span>
                            </button>
                        </div>

                    </form>
                </div>

                {/* Media */}
                <ul className='static lg:absolute bottom-2 lg:bottom-5 right-5 lg:right-10 text-right'>
                    <li className='mb-2 md:mb-3 lg:mb-4 last:mb-0'>
                        <span className='inline-block relative group overflow-hidden'>
                            {/* Normal */}
                            <a href="https://github.com/markoGit7" target='_blank' className='relative inline-block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase lg:group-hover:-translate-y-full duration-300 ease-in-out transition-all lg:before:hidden before:content-[""] before:bg-orange-400 before:w-1/2 before:h-0.5 before:absolute before:bottom-0 before:left-0'>Github</a>
                            {/* Hover */}
                            <a href="https://github.com/markoGit7" target='_blank' className='hidden lg:block [-webkit-text-stroke:1px_rgba(0,0,0,0.4)] text-5xl font-bold uppercase absolute top-full left-0 group-hover:top-0 text-orange-400 duration-300 ease-in-out transition-all'>Github</a>
                        </span>
                    </li>

                    <li className='mb-2 md:mb-3 lg:mb-4 last:mb-0'>
                        <span className='inline-block relative group overflow-hidden'>
                            {/* Normal */}
                            <a href="https://linkedin.com/in/marko-mijakovski-a90b7a32a" target='_blank' className='relative inline-block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase lg:group-hover:-translate-y-full duration-300 ease-in-out transition-all lg:before:hidden before:content-[""] before:bg-orange-400 before:w-1/2 before:h-0.5 before:absolute before:bottom-0 before:left-0'>LinkedIn</a>
                            {/* Hover */}
                            <a href="https://linkedin.com/in/marko-mijakovski-a90b7a32a" target='_blank' className='hidden lg:block [-webkit-text-stroke:1px_rgba(0,0,0,0.4)] text-5xl font-bold uppercase absolute top-full left-0 group-hover:top-0 text-orange-400 duration-300 ease-in-out transition-all'>LinkedIn</a>
                        </span>
                    </li>

                    <li className='mb-2 md:mb-3 lg:mb-4 last:mb-0 relative'>
                        <span className='inline-block relative group overflow-hidden'>
                            {/* Normal */}
                            <span onClick={() => { navigator.clipboard.writeText("m.mijakovski07@gmail.com"), setCopyMsg(true) }} className='relative inline-block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase lg:group-hover:-translate-y-full duration-300 ease-in-out transition-all lg:before:hidden before:content-[""] before:bg-orange-400 before:w-1/2 before:h-0.5 before:absolute before:bottom-0 before:left-0'>Email</span>
                            {/* Hover */}
                            <span onClick={() => { navigator.clipboard.writeText("m.mijakovski07@gmail.com"), setCopyMsg(true) }} className='hidden lg:block [-webkit-text-stroke:1px_rgba(0,0,0,0.4)] text-5xl font-bold uppercase absolute top-full left-0 group-hover:top-0 text-orange-400 duration-300 ease-in-out transition-all'>Email</span>
                        

                        
                        </span>

                        {/* tooltip */}
                        {
                            copyMsg && (<div className='w-17 h-7 bg-orange-400 rounded-lg flex items-center justify-center text-white absolute top-0 left-1'>Copied!</div>)
                        }
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Contact