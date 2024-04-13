import React from 'react';
import Civil01 from '../Images/civil01.jpg';
import Civil02 from '../Images/civil02.jpg';

export default function Welcome() {
    return (
        <div className="flex relative h-full mx-8 mt-24 mb-0">
            {/* Left Section */}
            <div className='w-1/2'>
                <div className="flex justify-end w-2/3">
                    <img src={Civil02} alt="Welcome" className="w-2/3 h-[300px]" />
                </div>
                <div className="flex justify-start w-1/2">
                    <img src={Civil01} alt="Welcome" className="w-2/3 h-[250px] -translate-y-48" />
                </div>
                {/* Statistic */}
                <div className='flex flex-col absolute items-center bg-orange-500 text-white px-4 py-6 bottom-48 left-96 rounded-lg shadow-lg'>
                    <h1 className='text-2xl'>15,350 +</h1>
                    <h1>Clients Worldwide</h1>
                </div>
            </div>

            {/* Right Section */}
            <div className='flex flex-col w-1/2 px-6'>
                <h1 className='text-5xl mb-6'>TransMax Logistics Around <span className='text-orange-400'>the World</span></h1>

                <p className='mb-4'>Transmax is the world's leading global logistics provider — we support industry and trade in the global exchange of goods through land transport.</p>

                <p className='mb-4'>Our value-added services ensure the flow of goods continues smoothly and supply chains stay lean and optimized for success.</p>
                
                <button className='bg-gray-100 text-green-900 font-bold px-6 py-3 rounded-lg shadow-md w-fit'>MORE ABOUT US</button>
            </div>
        </div>
    );
}
