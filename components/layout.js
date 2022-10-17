
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children})=>{
    return (
    <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <div className='flex flex-col items-center justify-center'>{children}</div>
        <Footer />
    </div>
    );
}
export default Layout