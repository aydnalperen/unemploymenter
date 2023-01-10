import Link from 'next/link'
import Image from 'next/image'
const Navbar = ()=>{
    return(
        <>
        <nav className="p-3 bg-gray-300 border-gray-200 sm:px-4 py-2.5">
            <div className="flex items-center justify-center">
                <Link href="/" className="flex items-center " >
                    <Image 
                        src="/logo.png"
                        width={220}
                        height={220}
                        alt="logo"
                    />
                </Link>       
            </div> 
        </nav>
        </>
    );

}

export default Navbar