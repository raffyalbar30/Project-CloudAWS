import React, { useState } from 'react';
import CryptoPaymentModal from '../components/modalplayment';

const AwsAccountLayout = () => {

  const [ data, setdata ] = useState([]);
  const [ qyt, setqyt ] = useState();
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

  console.log(data); 

    return (
      <>
         <CryptoPaymentModal isOpen={open} onClose={() => setopen(false)}/>
         <div className="min-h-screen w-full bg-white">

  {/* Breadcrumb */}
  <div className="mx-auto w-full px-4 pt-3">
    <p className="text-sm text-gray-500 lg:text-base">
      <span className="font-medium text-gray-700">Home</span>
      {" / "}
      <span className="font-medium text-gray-700">Cloud Account</span>
      {" / "}
      Buy AWS Account
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
          src="/images/Aws.jpg"
          alt="Buy AWS Account"
          className="h-auto w-full object-cover"
        />

      </div>
    </div>


    {/* RIGHT - Product Information */}
    <div className="min-w-0 w-full flex-1 pt-1">

      {/* Title */}
      <h1 className="text-2xl font-bold leading-tight text-[#202020] lg:text-3xl">
        Buy AWS Account
      </h1>

      {/* Price Range */}
      <p className="mt-3 text-base text-[#99995d] lg:text-lg">
        $15.00 – $13,000.00
      </p>

      {/* Description */}
      <p className="mt-4 w-full text-sm leading-relaxed text-[#444] lg:text-base">
        Do You Need A Cloud Computing Account With Amazon AWS? You Are Having
        Trouble Locating The Finest Vendor For Buy AWS Account For The Greatest
        Cloud Performance. We Are Offering The Highest-Quality Verified AWS Account.
      </p>

      {/* Features */}
      <h2 className="mt-4 text-xl font-bold text-[#202020] lg:text-2xl">
        Features Of AWS Account:
      </h2>

      <div className="mt-3 text-sm leading-relaxed text-[#444] lg:text-base">
        <p>100% Unique IP Address</p>
        <p>Unlimited VPS</p>
        <p>Enabled By AWS EC2</p>
        <p>Making Free Trials Account</p>
        <p>Unlimited Apps</p>
        <p>Trial Accounts Valid For A Year</p>
        <p>The Billing Address Is Accurate.</p>
        <p>Simple To Use Account</p>
        <p>Everything About The Account Has Been Confirmed.</p>
        <p>100% Money-Back Guarantee</p>
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

      {/* Options */}
      <div className="mt-4 w-full bg-[#f7f7f7] px-3 py-3">
        <div className="flex items-start gap-3">

          <label className="w-[80px] shrink-0 text-sm font-medium leading-tight text-[#222] lg:text-base">
            Choose An
            <br />
            Option
          </label>

          <div className="min-w-0 flex-1">

            <select 
             className="h-10 w-full rounded-[3px] border border-black bg-white px-3 text-sm text-gray-700 outline-none lg:text-base"
              onChange={(e) => {
                const selectedItem = price.find(
                    (item) => item.id.toString() === e.target.value
                );

                setdata(selectedItem);
            }}
            >
               {
                  price?.map((item) => {
                     return(
                          <option 
                             key={item.id}
                             value={item.id}
                             >{item.options}</option>
                     )
                  })
               }
            </select>

            <button className="mt-1 text-xs text-[#334e8c] lg:text-sm">
              Clear
            </button>

          </div>
        </div>
      </div>

      {/* Price */}
      <p className="mt-4 text-xl font-semibold text-[#222] lg:text-2xl">
        {`$${data.price}`}
      </p>

      {/* Buy */}
      <div className="mt-3 flex items-center gap-1">

       <input
        type="number"
        defaultValue="1"
        min="1"
        onChange={(e) => {
            if (e.target.value < 1) {
                e.target.value = 1;
            }

            setqyt(e.target.value); 
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

export default AwsAccountLayout;
