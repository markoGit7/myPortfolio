import { useEffect } from 'react'

// Images
import {
    movies_web_3, company_web

} from '../../../assets/images/index';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


// ToolTip 
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// Css
import  '../../../assets/styles/index.css';

// GSAP animations
import gsap from 'gsap';

function Projects() {
    
    useEffect(() => {
        const cards = document.querySelectorAll("#card");

        gsap.fromTo(
            cards,
            {
                y: -50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.4,
                delay: 0.6, // waits 2.5 seconds
                ease: "power3.inOut",
            }
        );
    }, []);
    

    return (
        <div className='w-full'>
            <div className='flex flex-wrap -mx-2 gap-y-6'>

                {/* Card */}
                <div className='w-full sm:w-1/2 xl:w-1/4 px-2' id='card'>
                    {/* Image */}
                    <div className='pt-[10px] relative mb-3'>
                        <div className='bg-orange-400 h-1 absolute top-0 left-0 w-7'/>

                        <div className='shadow-[2px_2px_5px_3px_rgba(0,0,0,0.3)] flex flex-wrap relative h-48 overflow-hidden' >
                            <img src={movies_web_3} className='w-full h-full object-cover object-center hover:scale-120 hover:rotate-3 transition-all duration-300 ease-in-out' />
                        </div>

                    </div>
                    {/* Text Box */}
                    <div className='py-[10px] relative h-[calc(100%-214px)]'>
                        <div className='bg-orange-400 h-1 absolute top-0 right-0 w-7'/>
                        
                        
                        {/* Inner Box */}
                        <div className='bg-gray-300/85 p-2 shadow-[3px_3px_5px_3px_rgba(0,0,0,0.3)] h-full relative pb-12'>
                            {/* Title */}
                            <h2 className='font-bold'>Movies Website <span className='font-normal'>[ Full-Stack ]</span></h2>
                            <hr />
                            
                            {/* PROJECT DESCRIPTION (bullets, etc) */}
                            <ul className='dottedList mt-3'>
                                <li>JWT Authentication</li>
                                <li>IMDb API Integration</li>
                                <li>Likes, Comments & Replies</li>
                                <li>Advanced Filtering & Search</li>
                            </ul>

                            {/* Buttons */}
                            <div className='flex flex-wrap justify-between items-center mt-4 absolute w-[calc(100%-16px)] bottom-2 left-2'>

                                {/* Repo Button */}
                                <div className='inline-block'>
                                    <a href='https://github.com/markoGit7/moviesApp' target='_black'>
                                        
                                        <FontAwesomeIcon icon={faGithub} 
                                            data-tooltip-id="repo"
                                            data-tooltip-content="REPO"
                                            data-tooltip-place="top"
                                            className='text-xl md:hover:text-orange-400 transition-colors duration-300 ease-in-out'
                                        />
                                    
                                    </a>

                                    <Tooltip id='repo' />
                                </div>

                                {/* Demo Button */}
                                <div className='inline-block'>
                                    <a href='https://movies-app-steel-ten.vercel.app/' target='_black'>
                                        <FontAwesomeIcon icon={faUpRightFromSquare}

                                            data-tooltip-id="demo"
                                            data-tooltip-content="DEMO"
                                            data-tooltip-place="top"
                                            className='text-xl md:hover:text-orange-400 transition-colors duration-300 ease-in-out'
                                        />
                                    
                                    </a>

                                    <Tooltip id='demo' />
                                </div>
                            </div>
                        </div>

                        <div className='bg-orange-400 h-1 absolute bottom-0 left-0 w-7'/>
                        <div className='bg-orange-400 h-1 absolute bottom-0 right-0 w-7'/>

                    </div>
                </div>


                {/* Card */}
                <div className='w-full sm:w-1/2 xl:w-1/4 px-2' id='card'>
                    {/* Image */}
                    <div className='pt-[10px] relative mb-3'>
                        <div className='bg-orange-400 h-1 absolute top-0 left-0 w-7'/>

                        <div className='shadow-[2px_2px_5px_3px_rgba(0,0,0,0.3)] flex flex-wrap relative h-48 overflow-hidden' >
                            <img src={company_web} className='w-full h-full object-cover object-center hover:scale-120 hover:rotate-3 transition-all duration-300 ease-in-out' />
                        </div>

                    </div>
                    {/* Text Box */}
                    <div className='py-[10px] relative h-[calc(100%-214px)]'>
                        <div className='bg-orange-400 h-1 absolute top-0 right-0 w-7'/>
                        
                        
                        {/* Inner Box */}
                        <div className='bg-gray-300/85 p-2 shadow-[3px_3px_5px_3px_rgba(0,0,0,0.3)] h-full relative pb-12'>
                            {/* Title */}
                            <h2 className='font-bold'>Online Programming Courses Platform <span className='font-normal'>[ Front-End ]</span></h2>
                            <hr />
                            
                            {/* PROJECT DESCRIPTION (bullets, etc) */}
                            <ul className='dottedList mt-3'>
                                <li>Responsive</li>
                                <li>Email-Js Integration</li>
                            </ul>

                            {/* Buttons */}
                            <div className='flex flex-wrap justify-between items-center mt-4 absolute w-[calc(100%-16px)] bottom-2 left-2'>

                                {/* Repo Button */}
                                <div className='inline-block'>
                                    <a href='https://github.com/markoGit7/web_One' target='_black'>
                                        
                                        <FontAwesomeIcon icon={faGithub} 
                                            data-tooltip-id="repo"
                                            data-tooltip-content="REPO"
                                            data-tooltip-place="top"
                                            className='text-xl md:hover:text-orange-400 transition-colors duration-300 ease-in-out'
                                        />
                                    
                                    </a>

                                    <Tooltip id='repo' />
                                </div>

                                {/* Demo Button */}
                                <div className='inline-block'>
                                    <a href='https://markogit7.github.io/web_One/' target='_black'>
                                        <FontAwesomeIcon icon={faUpRightFromSquare}

                                            data-tooltip-id="demo"
                                            data-tooltip-content="DEMO"
                                            data-tooltip-place="top"
                                            className='text-xl md:hover:text-orange-400 transition-colors duration-300 ease-in-out'
                                        />
                                    
                                    </a>

                                    <Tooltip id='demo' />
                                </div>
                            </div>
                        </div>

                        <div className='bg-orange-400 h-1 absolute bottom-0 left-0 w-7'/>
                        <div className='bg-orange-400 h-1 absolute bottom-0 right-0 w-7'/>

                    </div>
                </div>


                

                

            </div>
        </div>
    )
}

export default Projects