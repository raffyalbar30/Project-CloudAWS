import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { TbBrandWechat } from "react-icons/tb";

const Navbar = () => {
    const navigations = [
         {
            id: 1, 
            name: "Home",
            link: "/Home"
         }, 
         {
            id: 2, 
            name: "Product Cloud", 
            link: "/Cloud"
         }, 
         {
            id: 3, 
            name: "Contact Us", 
            link: "/Contact"
         }, 
          {
            id: 4, 
            name: "About Us",
            link: "/About"
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
        <div className='flex justify-between items-center'>
            <img src="/images/bestcloudacc.png" alt="Logo" className="h-[65px]"/>
            <div className="flex gap-x-4">
               {
                  navigations.map((items) => {
                      return (
                           <>
                             <p className="text-[20px] text-gray-900 font-semibold">{items.name}</p>
                           </>
                      )
                  })
               }
            </div>
            <div className="flex gap-x-6">
               {
                  sosialsmedia.map((items) => {
                      return (
                           <>
                             <span className="text-[45px] text-slate-100">{items.icons}</span>
                           </>
                      )
                  })
               }
            </div>
        </div>
    );
}

export default Navbar;
