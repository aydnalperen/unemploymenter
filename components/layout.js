
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children})=>{
    return (
    <>
        <Navbar />
        <div className='flex items-center justify-center'>{children}</div>
        <Footer />
    </>
    );
}
export default Layout