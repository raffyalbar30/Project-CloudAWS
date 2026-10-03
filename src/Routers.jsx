import React from 'react';

const Routers = ({Children}) => {
    return (
        
    <div className='w-screen flex flex-wrap'>
      {/* Navbar */}
       <div className='border border-slate-500 mr-12 ml-12 mt-8 p-6 w-full'>
          <div>Ini adalah navbar</div>
       </div>
         { Children}
    </div>

    );
}

export default Routers;