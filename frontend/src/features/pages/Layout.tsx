import {useState} from 'react'

import { Header } from '../header/index';
import  { Display } from '../display/index';

import Cursor from '../Cursor/Cursor';

function Layout() {

    const [burgerToggle, setBurgerToggle] = useState<boolean>(false);

    console.log("Burger Toggle Button: ", burgerToggle);
    return (
        <>
           
           <Cursor />

            <section className='w-full relative min-h-dvh' id='main-section'>
                <div className='block lg:grid grid-cols-12 -mx-2 h-dvh'>
                    {/* Navigation-Desktop */}
                    <div className='col-span-3 px-2  relative hidden lg:block'>

                        <div className='w-[300px] max-w-full inline-block top-1/2 right-0 -translate-y-1/2 absolute'>

                            <Header />

                        </div>
                    </div>
                    {/* Navigation-Mobile */}
                    
                    <div className={`w-[300px] max-w-full inline-block lg:hidden transition-all duration-300 ease-in-out  h-full absolute top-0 z-20 ${burgerToggle ? 'left-0' : '-left-full'}`}>

                        <Header toggle={setBurgerToggle}/>

                    </div>
                   

                    {/* Display */}
                    <div className='col-span-9 px-0 lg:px-2 h-auto lg:h-dvh relative'>
                        
                        <Display toggle={setBurgerToggle}/>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Layout