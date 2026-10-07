import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { TbBrandWechat } from "react-icons/tb";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();


    const navigations = [
         {
            id: 1, 
            name: "Home",
            link: "/shop"
         }, 
         {
            id: 2, 
            name: "Product Cloud", 
            link: "/Allproducts"
         }, 
          {
            id: 3, 
            name: "About Us",
            link: "/about"
         }
    ]; 

    const sosialsmedia = [
        {
            id: 5, 
            name: "Telegram", 
            icons: <FaTelegram className="bg-blue-400 p-2 rounded-lg"/>, 
            link: "/linktelegramlo"
         }, 
         {
            id: 6, 
            name: "Whatsapp", 
            icons: <FaWhatsapp className="bg-green-400 p-2 rounded-lg"/>, 
            link: "/linkwhatsapplo"
         }, 
          {
            id: 7, 
            name: "Wechat", 
            icons: <TbBrandWechat className="bg-gray-400 p-2 rounded-lg"/>, 
            link: "/linkwechatlo"
         }, 
    ]; 

    return (
     <div className="w-full">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <img
            src="/images/bestcloudacc.png"
            alt="Logo"
            className="h-[50px] sm:h-[60px] md:h-[65px]"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-14">
            {navigations.map((items, index) => (
              <p
                onClick={()=> navigate(items.link)}
                key={index}
                className="text-[16px] lg:text-[20px] text-gray-900 font-semibold cursor-pointer"
              >
                {items.name}
              </p>
            ))}
          </div>

          {/* Desktop Social Media */}
          <div className="hidden md:flex items-center gap-x-4">
            {sosialsmedia.map((items, index) => (
              <span
                onClick={()=> navigate(items.link)}
                key={index}
                className="text-[35px] lg:text-[45px] text-slate-100"
              >
                {items.icons}
              </span>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-gray-900"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 rounded-xl p-4">
            
            {/* Navigation */}
            <div className="flex flex-col gap-y-4">
              {navigations.map((items, index) => (
                <p
                  key={index}
                  onClick={() => {
                    navigate(items.link)
                    setIsOpen(false) }}
                  className="text-[18px] text-gray-900 font-semibold cursor-pointer hover:text-gray-500"
                >
                  {items.name}
                </p>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex gap-x-4 mt-5 pt-4 border-t border-gray-200">
              {sosialsmedia.map((items, index) => (
                <span
                  onClick={()=> navigate(items.link)}
                  key={index}
                  className="text-[32px] text-gray-900"
                >
                  {items.icons}
                </span>
              ))}
            </div>

          </div>
        )}
    </div>
    );
}

export default Navbar;

