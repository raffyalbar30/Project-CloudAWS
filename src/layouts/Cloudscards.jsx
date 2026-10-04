import React from 'react';
import Cards from '../components/Cards';

const Cloudscards = () => {

const products = [
  {
    name: "Buy AWS Account",
    price: "$15.00 – $13,000.00",
    image: "/images/Aws.jpg",
    sale: true,
  },
  {
    name: "Buy Google Cloud Account",
    price: "$50.00 – $85.00",
    image: "/images/Cloud.jpg",
    sale: false,
  },
  {
    name: "Buy Hetzner Account",
    price: "$55.00",
    image: "/images/Hetzenr.jpg",
    sale: false,
  },
  {
    name: "Buy Vultr Account",
    price: "$25.00 – $30.00",
    image: "/images/Vultr.jpg",
    sale: false,
  },
];

    return (
        <Cards children={
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {products.map((product, index) => (
            <div key={index} className="group">

              {/* Image */}
              <div className="relative aspect-square w-full overflow-hidden">
                
                {product.sale && (
                  <span className="absolute right-[-2px] top-[-2px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-lime-600 text-sm font-semibold text-white">
                    Sale!
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Name */}
              <h3 className="mt-5 text-base font-medium text-indigo-600 hover:text-indigo-800">
                <a href="#">
                  {product.name}
                </a>
              </h3>

              {/* Price */}
              <p className="mt-2 text-sm text-yellow-600">
                {product.price}
              </p>

              {/* Button */}
              <button
                className="
                  mt-6
                  rounded-sm
                  bg-slate-100
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-200
                "
              >
                Select Option
              </button>

            </div>
          ))}

        </div>
        }/>
    );
}

export default Cloudscards;


