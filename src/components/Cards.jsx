import React from 'react';

const Cards = ({children}) => {
    return (
         <section className="w-full bg-white px-2 py-10">
            <div className="mx-auto max-w-7xl">
                {children}
             </div>
        </section>
    );
}

export default Cards;
