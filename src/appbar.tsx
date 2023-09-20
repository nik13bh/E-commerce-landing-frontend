import SideBar from "./sidebar";
import { useState } from "react";

function Appbar(){
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };
   

    return(
        <>
        <div className="flex flex-row">

            <img src="../images/icon-menu.svg" alt="icon menu" className="ml-10 mt-7 mr-3 h-5 cursor-pointer md:invisible" onClick={()=>{
                toggleSidebar()
            }}/>
           <SideBar isOpen={sidebarOpen} onClose={closeSidebar} />
            <p className="font-bold text-3xl text-black mt-5 ml-3">sneaKers</p>
            <div className="hidden md:flex flex-row">
            <div className="text-md mt-7 ml-7 text-gray-600 hover:text-black cursor-pointer hover:underline underline-offset-8 decoration-orange-600">Collection</div>
            <div className="text-md mt-7 ml-7 text-gray-600 hover:text-black cursor-pointer hover:underline underline-offset-8 decoration-orange-600">Men</div>
            <div className="text-md mt-7 ml-7 text-gray-600 hover:text-black cursor-pointer hover:underline underline-offset-8 decoration-orange-600">Women</div>
            <div className="text-md mt-7 ml-7 text-gray-600 hover:text-black cursor-pointer hover:underline underline-offset-8 decoration-orange-600">About</div>
            <div className="text-md mt-7 ml-7 text-gray-600 hover:text-black cursor-pointer hover:underline underline-offset-8 decoration-orange-600">Contact</div>


            </div>
            

            <img src="../images/icon-cart.svg" alt="cart icon" className="w-10 h-7 mt-7 ml-36 mr-6 md:ml-60  " />
            <img src="../images/image-avatar.png" alt="avatar image" className="w-10 mt-5 ml-3" />

            <div className="md:visible">
            
            
            
            <hr className="w-[70%] m-auto  text-gray-500 "></hr>

        </div>

        </div>

        </>
    )
}
export default Appbar;