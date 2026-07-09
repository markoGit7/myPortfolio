import React, {useState, useRef, useEffect} from 'react'

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 2. Import specific icons from their free style packages
import { faSquareXmark, faBars} from '@fortawesome/free-solid-svg-icons';



import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

// Hooks
import { usePages } from '../hooks/useDisplay'


function Display({toggle}) {

    const screen_ref = useRef(null);
    let min_width = gsap.matchMedia();

    
    const {
        activePage
        
    } = usePages();
    
    useEffect(() => {

        
        const tl = gsap.timeline();

        min_width.add("(min-width:1024px)", () => {

            tl.fromTo(
                screen_ref.current,

                {
                    overflow:"hidden",
                    opacity:0,
                    width:0,
                },
                
                {
                    overflow:"auto",
                    width:"calc(100% - 100px)",
                    opacity:1,
                    duration:1,
                    ease:"power3.inOut",
                }
            )

        });



    }, [activePage]);

    return (
        <>
            <section ref={screen_ref} className='static lg:absolute top-1/2 left-1/2 translate-none lg:-translate-1/2 w-full lg:w-[calc(100%-100px)] h-auto lg:h-[calc(100%-100px)] overflow-x-hidden'>
                {/* Top */}
                <div className='bg-gray-300 h-8 w-full flex items-center'>
                    <FontAwesomeIcon icon={faBars} className='ml-4 text-2xl block lg:hidden!' onClick={() => toggle(prev => !prev)}/>
                </div>
                {/* Location */}
                <div className='bg-gray-200/70 h-8 w-full inline-flex items-center'>
                    <p className='ml-5'>{activePage}</p>
                </div>
                {/* Content */}
                <div className='bg-gray-200/50  outline-1 outline-white/70 lg:auto overflow-x-hidden overflow-y-auto h-[calc(100dvh-64px)] lg:h-[inherit] relative'> 
                
                    {/* Padding */}
                    <div className='p-5 h-full'>
                        
                        {activePage === "Home" && <Home />}
                        {activePage === "Skills" && <Skills />}
                        {activePage === "Projects" && <Projects />}
                        {activePage === "Education" && <Education />}
                        {activePage === "Contact" && <Contact />}

                    </div>
                
                </div>
            </section>
        

        </>
    )
    
    
}

export default Display