import AllDescription from './Allproductsdesk';
import Cloudscards from './Cloudscards';

const Allproductslayouts = () => {
    return (
        <div className='p-4'>
            <p className='font-semibold text-slate-400 text-lg'>Home / <span className='text-base text-gray-500'>All products</span></p>
            <p className='font-semibold text-4xl mt-4 text-black'>Shop All Products</p>
            <p className='font-normal text-lg mt-4 text-black'>Showing all 4 results</p>
            <Cloudscards/>
            <AllDescription/>
        </div>
    );
}

export default Allproductslayouts;
