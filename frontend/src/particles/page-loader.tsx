import {useState, useEffect, useRef} from "react"


function PageLoader () {

    const [loading, setLoading] = useState(true);
    const loadingCircle = useRef<HTMLDivElement>(null);
    useEffect(() => {

        if (!loading) return;
        
        setTimeout(() => {
            setLoading(false);
        }, 300);

        spinning();
        
    }, [loading]);
    
    function spinning (value: number = 0) {
   
        let count = value;

        if (!count || count === 0) {
            count = 365 + 25;   
        
        } else if (count) {
            count += 25;
        }

        // to not show error after it dissapears
        if (loadingCircle?.current) {
            loadingCircle.current!.style.transform = `rotate(${count}deg)`;
        }
        

        if(!loading) return null;
    
        setTimeout(() => {
            if (loading) {
                spinning(count);
            } else {
                return;
            }
        }, 100);
        
    }

    return (
        <>
            {
                loading && (

                    <div id="loader" className="w-full absolute top-0 left-0 h-full bg-amber-500 z-50 flex justify-center items-center">
                        {/* Spinner */}
                        <div id="spinner" className="transition-all duration-300 ease-in-out w-18 h-18 border-5 border-t-white border-r-white rounded-full border-b-transparent border-l-transparent" ref={loadingCircle}></div>    
                    </div>    

                )
            }
        </>
    )

}

export default PageLoader