import { useState } from 'react';
import Descriptionsproduct from '../components/Descriptions';
import AdditionalInformation from '../components/addetional';
import Reviews from '../components/Reviews';

const Descriptions = () => {
    const [active, setactive] = useState("desc");

    const data = [
        {
            id: 1,
            name: "Descriptions",
            title: "desc",
        },
        {
            id: 2,
            name: "Additional Information",
            title: "additional",
        },
        {
            id: 3,
            name: "Reviews (0)",
            title: "reviews",
        },
    ];

    return (
        <div className="w-full">

            {/* Tabs */}
            <div className="mx-auto mt-3 w-full overflow-x-auto">
                <div className="flex min-w-max border-b border-[#d8d1df]">

                    {data.map((items) => {
                        const isActive = active === items.title;

                        return (
                            <button
                                key={items.id}
                                onClick={() => setactive(items.title)}
                                className={`
                                    h-[35px]
                                    border
                                    border-[#d8d1df]
                                    px-3
                                    text-sm
                                    font-medium
                                    transition
                                    lg:h-[40px]
                                    lg:px-4
                                    lg:text-base
                                    ${
                                        isActive
                                            ? "border-b-white bg-white text-[#333]"
                                            : "bg-[#f5f5f5] text-gray-500 hover:bg-white hover:text-[#333]"
                                    }
                                `}
                            >
                                {items.name}
                            </button>
                        );
                    })}

                </div>
            </div>

            {/* Content */}
            <div className="mt-6">
                {active === "desc" ? (
                    <Descriptionsproduct />
                ) : active === "additional" ? (
                    <AdditionalInformation />
                ) : active === "reviews" ? (
                    <Reviews/>
                ) : null}
            </div>

        </div>
    );
};

export default Descriptions;
