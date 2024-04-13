import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleRight, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import AirLine01 from '../Images/airline01.jpeg';
import Ship01 from '../Images/ship01.jpg';

const imageUrls = [AirLine01, Ship01, AirLine01]; // Add more image URLs here

const serviceData = [
    {
        title: 'Air Freight Services',
        description: 'At our Auto Service garage, we fully appreciate how difficult it is for people to find.',
    },
    {
        title: 'Sea Freight Services',
        description: 'At our Auto Service garage, we fully appreciate how difficult it is for people to find.',
    },
    {
        title: 'Sea Freight Services',
        description: 'At our Auto Service garage, we fully appreciate how difficult it is for people to find.',
    },
    // Add more service items as needed
];

export default function Services() {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage(prevPage => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [currentPage]);

    const totalPages = Math.ceil(serviceData.length / 2);

    const startIndex = currentPage * 2;
    const visibleServices = serviceData.slice(startIndex, startIndex + 2);

    return (
        <div className='flex flex-col justify-center items-center my-5'>
            <div className='flex flex-col items-center'>
                <p className='text-green-500'>Real Solution, Real Fast!</p>
                <h1 className='text-4xl font-bold'>Best Global Logistics Solutions</h1>
            </div>

            <div className='flex flex-wrap items-center justify-center'>
                {visibleServices.map((service, index) => (
                    <div key={index} className="flex items-center h-full w-full sm:w-1/2 bg-white shadow-xl m-4 lg:w-1/3">
                        <div className='w-1/2'>
                            <img src={imageUrls[index % imageUrls.length]} alt="Logo" className="h-[300px] m-0 p-0 object-cover" />
                        </div>
                        <div className="w-1/2 p-5 flex flex-col justify-between">
                            <div>
                                <h1 className='font-bold text-xl mb-4'>{service.title}</h1>
                                <p>{service.description}</p>
                            </div>
                            <div className='mt-4'>
                                <FontAwesomeIcon icon={faCircleArrowRight} className='mr-2' />
                                <h1 className='font-bold inline'>Read More</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-between items-center w-full px-48 mt-4'>
                <div className='flex items-center'>
                    <h1 className='mr-2'>Logistic & Transport Solutions Saves Your Time. Finds Your Solutions</h1>
                    <FontAwesomeIcon icon={faCircleRight} className='text-gray-500' />
                </div>
                <div>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <FontAwesomeIcon key={index} icon={faCircleDot} className={`mr-1 ${index === currentPage ? 'text-blue-500' : 'text-gray-300'}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
