import Link from 'next/link'

const Navbar = ()=>{
    return(
        <>
        <nav className="p-3 bg-gray-300 border-gray-200 sm:px-4 py-2.5">
            <div className="flex items-center justify-center">
                <Link href="/" className="flex items-center " >
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">StatisticER</span>
                </Link>       
            </div> 
        </nav>
        </>
    );

}

export default Navbar