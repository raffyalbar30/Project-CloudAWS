import React, { useEffect, useState } from 'react';
import CryptoPaymentModal from '../components/modalplayment';

const HetzernetAccountLayout = () => {

  const [ data, setdata ] = useState(null);
  const [ qyt, setqyt ] = useState(1);
  const [ open, setopen ] = useState(false);

  const price = [
    {
       id: 1,
       options: "AWS 256 vCPU", 
       price: 100
    }, 
    {
       id: 2,
       options: "AWS 128 vCPU", 
       price: 70
    },
    {
       id: 3,
       options: "AWS 64 vCPU", 
       price: 40
    }
  ]; 

  useEffect(() => {
    if (price?.length > 0 && !data) {
        const defaultItem = price.find((item) => item.id === 1);

        if (defaultItem) {
            setdata(defaultItem);
        }
    }
}, [price, data]);

    return (
      <>
         <CryptoPaymentModal data={data} qyt={qyt} isOpen={open} onClose={() => setopen(false)}/>
         <div className="min-h-screen w-full bg-white">

  {/* Breadcrumb */}
  <div className="mx-auto w-full px-4 pt-3">
    <p className="text-sm text-gray-500 lg:text-base">
      <span className="font-medium text-gray-700">Home</span>
      {" / "}
      <span className="font-medium text-gray-700">Cloud Account</span>
      {" / "}
      Buy Hetzner Account
    </p>
  </div>


  {/* Product Detail */}
  <div
    className="
      mx-auto
      flex
      w-full
      max-w-[800px]
      flex-col
      gap-8
      px-4
      pt-4
      md:flex-row
      md:gap-[30px]
      md:px-0
    "
  >

    {/* LEFT - Product Image */}
    <div className="w-full shrink-0 md:w-[365px]">
      <div className="relative">

        {/* Sale */}
        <div className="absolute left-[-4px] top-[-4px] z-10 flex h-[31px] w-[31px] items-center justify-center rounded-full bg-[#a7c52c]">
          <span className="text-xs font-medium text-white">
            Sale!
          </span>
        </div>

        {/* Search */}
        <button className="absolute right-[10px] top-[10px] z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-sm shadow-sm">
          🔍
        </button>

        <img
          src="/images/Hetzenr.jpg"
          alt="Buy AWS Account"
          className="h-auto w-full object-cover"
        />

      </div>
    </div>


    {/* RIGHT - Product Information */}
    <div className="min-w-0 w-full flex-1 pt-1">

      {/* Title */}
      <h1 className="text-2xl font-bold leading-tight text-[#202020] lg:text-3xl">
        Buy Hetzner Account

      </h1>

      {/* Price Range */}
      <p className="mt-3 text-base text-[#99995d] lg:text-lg">
       $55.00
      </p>

      {/* Description */}
      <p className="mt-4 w-full text-sm leading-relaxed text-[#444] lg:text-base">
       Looking to Buy Hetzner account? Get genuine, fully verified Hetzner accounts for cloud servers, 
       VPS, or dedicated hosting. Trusted service and 24/7 support.

      </p>

      {/* Features */}
      <h2 className="mt-4 text-xl font-bold text-[#202020] lg:text-2xl">
       Features Of Hetzner Account:
      </h2>

      <div className="mt-3 text-sm leading-relaxed text-[#444] lg:text-base">
        <p>USA Account</p>
        <p>Verification is complete.</p>
        <p>Verified with a legitimate card.</p>
        <p>Account Status: Active.</p>
        <p>Has an IP address from the USA that is genuine.</p>
        <p>The account was new and had never been used before.</p>
        <p>One-Day Replacement Guarantee.</p>
      </div>

      {/* What You Get */}
      <h2 className="mt-4 text-xl font-bold text-[#202020] lg:text-2xl">
        What Will You Get:
      </h2>

      <div className="mt-3 text-sm leading-relaxed text-[#444] lg:text-base">
        <p>Account Details</p>
        <p>Login Information</p>
        <p>Customer Support 24/7</p>
      </div>


      {/* Price */}
      <p className="mt-4 text-xl font-semibold text-[#222] lg:text-2xl">
        {`$${data?.price}`}
      </p>

      {/* Buy */}
      <div className="mt-3 flex items-center gap-1">

        <input
      type="number"
      value={qyt}
      min="1"
      onChange={(e) => {
          const value = Number(e.target.value);

          if (value < 1) {
              setqyt(1);
          } else {
              setqyt(value);
          }
      }}
      className="h-10 w-12 border border-gray-400 text-center text-sm outline-none"
  />

        <button 
        onClick={() => setopen(true)}
        className="h-10 bg-[#9b5ab1] px-4 text-sm font-semibold text-white transition hover:bg-[#85469b] lg:text-base">
          Buy now
        </button>

      </div>

    </div>
  </div>
  </div>
      </>
    );
}

export default HetzernetAccountLayout;
