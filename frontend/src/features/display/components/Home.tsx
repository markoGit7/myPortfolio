import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


// Redux
import {useDispatch} from 'react-redux';
import { openProjects } from '../pagesSlice';

function Home() {
    
    const title_ref = useRef(null);
    const text_ref = useRef(null);
    const container_ref = useRef(null);

    // let min_width = gsap.matchMedia();
      
    useGSAP(() => {
        
        

    });

    const dispatch = useDispatch();   
   
    

    return (
        <>
            {/* Grid */}
            <div className="flex flex-wrap h-full justify-center items-center absolute top-0 left-0 overflow-x-hidden w-full overflow-y-auto lg:overflow-hidden px-4" ref={container_ref}>
                

                {/* Content */}
                <div className="text-white w-125">

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase mb-10" ref={title_ref}>HI, I'M MARKO</h1>
                    {/* Text */}
                    <p className="text-base sm:text-xl lg:text-2xl" ref={text_ref}>
                        <span className="block mb-3 italic text-white/80 text-sm sm:text-lg lg:text-xl">Full-Stack Developer</span>

                        I build responsive web applications with React, Node.js,
                        Express, MySQL, and Tailwind CSS, focusing on clean code,
                        performance, and intuitive user experiences.
                    </p>

                    <div className="w-full text-center mt-8">
                        <button onClick={() => { dispatch(openProjects()) } } className="w-33 outline-1 outline-orange-400 border-none px-3 min-h-12 rounded-lg hover:bg-orange-400 hover:font-bold">Projects</button>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Home