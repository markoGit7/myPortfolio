import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 2. Import specific icons from their free style packages
import { faSquareXmark, faBars, faPentagon } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



// Redux
import {useDispatch, useSelector} from 'react-redux';
import {openHome, openProjects, openSkills, openEducation, openContact} from '../../display/pagesSlice';
function Header({toggle}) {
    const dispatch = useDispatch();

    const activePage = useSelector(state => state.pages.activePage);

    const closeNavbar = () => {
        
        const interval = setInterval(() => {

            toggle && toggle(false);

            clearInterval(interval);
        }, 500);

    }
    
    
    return (
        <section className='bg-gray-300 py-4 pt-0 relative h-full lg:h-auto' >
            {/* Orange line */}
            <div className='bg-orange-400 h-1 absolute top-0 left-0 w-full'/>
            
            {/* Top !?!?!?*/}
            <div className='w-full py-4 justify-end flex items-center'>
                <FontAwesomeIcon icon={faSquareXmark} className='mr-3 text-2xl block lg:hidden!' onClick={() => toggle(prev => !prev)}/>
            </div>
            {/* Horizontal line */}
            <div className='bg-gray-500 h-px w-full mb-2'/>
            
            {/* Navigation */}
            <div className='p-[15px]'>
                <ul>
                    {/* Home */}
                    <li className='py-2 pl-[26px] relative'>
                        
                        {/* Link */}
                        <span onClick={ () => { dispatch(openHome()), closeNavbar()  }} className={`hover:bg-orange-400 transition-colors duration-300 ease-in-out peer cursor-pointer px-1 ${activePage === 'Home' ? 'bg-orange-400' : 'bg-transparent'}`}>Home</span>

                        {/* Icon */}
                        <FontAwesomeIcon icon={faPentagon} className={`peer-hover:text-orange-600 text-xl absolute left-0 top-1/2 -translate-y-1/2  transition-colors duration-300 ease-in-out ${activePage === 'Home' ? 'text-orange-600' : 'text-gray-600' }` }/>

                    </li>
                    
                    {/* Skills */}
                    <li className='py-2 pl-[26px] ml-7 relative'>
                        
                        {/* Link */}
                        <span onClick={ () => { dispatch(openSkills()), closeNavbar()  }} className={`hover:bg-orange-400 transition-colors duration-300 ease-in-out peer cursor-pointer px-1 ${activePage === 'Skills' ? 'bg-orange-400' : 'bg-transparent'}`}>Skills</span>

                        {/* Icon */}
                        <FontAwesomeIcon icon={faPentagon} className={`peer-hover:text-orange-600 text-xl absolute left-0 top-1/2 -translate-y-1/2  transition-colors duration-300 ease-in-out ${activePage === 'Skills' ? 'text-orange-600' : 'text-gray-600' }` }/>

                    </li>

                    {/* Projects */}
                    <li className='py-2 pl-[26px] ml-7 relative'>
                        
                        {/* Link */}
                        <span onClick={ () => { dispatch(openProjects()), closeNavbar()  }} className={`hover:bg-orange-400 transition-colors duration-300 ease-in-out peer cursor-pointer px-1 ${activePage === 'Projects' ? 'bg-orange-400' : 'bg-transparent'}`}>Projects</span>

                        {/* Icon */}
                        <FontAwesomeIcon icon={faPentagon} className={`peer-hover:text-orange-600 text-xl absolute left-0 top-1/2 -translate-y-1/2  transition-colors duration-300 ease-in-out ${activePage === 'Projects' ? 'text-orange-600' : 'text-gray-600' }` }/>

                    </li>

                    {/* Education */}
                    <li className='py-2 pl-[26px] ml-7 relative'>
                        
                        {/* Link */}
                        <span onClick={ () => { dispatch(openEducation()), closeNavbar()  }} className={`hover:bg-orange-400 transition-colors duration-300 ease-in-out peer cursor-pointer px-1 ${activePage === 'Education' ? 'bg-orange-400' : 'bg-transparent'}`}>Education</span>

                        {/* Icon */}
                        <FontAwesomeIcon icon={faPentagon} className={`peer-hover:text-orange-600 text-xl absolute left-0 top-1/2 -translate-y-1/2  transition-colors duration-300 ease-in-out ${activePage === 'Education' ? 'text-orange-600' : 'text-gray-600' }` }/>

                    </li>

                    {/* Contact */}
                    <li className='py-2 pl-[26px] ml-7 relative'>
                        
                        {/* Link */}
                        <span onClick={ () => { dispatch(openContact()), closeNavbar()  }} className={`hover:bg-orange-400 transition-colors duration-300 ease-in-out peer cursor-pointer px-1 ${activePage === 'Contact' ? 'bg-orange-400' : 'bg-transparent'}`}>Contact</span>

                        {/* Icon */}
                        <FontAwesomeIcon icon={faPentagon} className={`peer-hover:text-orange-600 text-xl absolute left-0 top-1/2 -translate-y-1/2  transition-colors duration-300 ease-in-out ${activePage === 'Contact' ? 'text-orange-600' : 'text-gray-600' }` }/>

                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Header