import React from 'react';
import Cloudscards from './Cloudscards';

const Shoplayouts = () => {
    return (
        <div className='p-4'>
            <p className='font-semibold text-slate-400 text-lg'>Home / <span className='text-base text-gray-500'>Shop</span></p>
            <p className='font-semibold text-4xl mt-4 text-black'>Shop</p>
            <p className='font-normal text-lg mt-4 text-black'>Showing all 4 results</p>
            <Cloudscards/>
        </div>
    );
}

export default Shoplayouts;
