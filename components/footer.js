import Link from "next/dist/client/link"
const Footer = ()=>{
    return (
        <>
            <footer className="p-4  shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-300">
                <span className="text-sm text-black sm:text-center">© 2022 <Link href="/" className="hover:underline">Statisticer</Link>. All Rights Reserved.
                </span>
                
            </footer>
        </>
    )
}
export default Footer