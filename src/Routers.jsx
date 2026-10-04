import React from 'react';
import Navbar from './components/Navbar';
import FAQ from './layouts/FAQ';

const Routers = ({Children}) => {
    return (
        
    <div className='w-screen flex flex-wrap'>
      {/* Navbar */}
       <div className='shadow-[0_0_10px_rgba(37,99,235,0.15)] mr-12 ml-12 mt-8 p-6 w-full'>
           <Navbar/>
       </div>
         { Children}
         <FAQ/>
         <div className="flex w-full items-center justify-center mb-8">
            <p className="text-center text-sm font-medium text-gray-900">
                2026 BestCloudAcc. All Rights Reserved by raffy-sama
            </p>
        </div>
    </div>

    );
}

export default Routers;