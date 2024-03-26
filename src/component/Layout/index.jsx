import Navbar from "../reuseable/Navbar"
import {Outlet} from "react-router-dom";
// import Footer from "../reuseable/Footer";


const Layout =()=>{
    return(
           <>
               <Navbar/>
               <Outlet/>
               {/*<Footer/>*/}
             </>
    )
}
export default Layout;