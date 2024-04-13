import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Testimonial data
const testimonials = [
    {
        id: 1,
        name: 'John Deo',
        position: 'Managing Director',
        content: 'Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum.',
    },
    // Add more testimonials as needed
];

// Helper function to render testimonial
const renderTestimonial = (testimonial) => (
    <div key={testimonial.id} className='flex justify-between mt-6'>
        <div className='flex'>
            <div className='border border-black h-fit w-fit text-sm items-center justify-center px-3 p-1'>
                <FontAwesomeIcon icon={faChevronLeft} className='text-gray-300 border-gray-100' />
            </div>
            <div className='border border-black h-fit w-fit text-sm items-center justify-center px-3 p-1'>
                <FontAwesomeIcon icon={faChevronRight} className='text-gray-300 border-gray-100' />
            </div>
        </div>

        <div>
            <h1 className='font-bold'>{testimonial.name}</h1>
            <p className='text-sm'>{testimonial.position}</p>
        </div>
    </div>
);

// Helper function to render "Why Choose Us" section
const renderWhyChooseUs = () => (
    <div>
        <h1 className='font-bold text-2xl'>WHY CHOOSE US</h1>
        <p className='text-sm'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
        {/* Render individual items */}
        {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className='flex flex-col justify-between'>
                <div className='border-b border-black w-full my-4'></div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-sm'>Dui ac hendrerit elementum quam ipsum auctor lorem</h1>
                    <button><FontAwesomeIcon icon={faPlus} className='bg-black text-white p-2 ml-2 rounded-md' /></button>
                </div>
            </div>
        ))}
    </div>
);

export default function Testimonials() {
    return (
        <div className="flex p-12">
            {/* Testimonials section */}
            <div className="w-1/2">
                <h1 className='font-bold text-2xl'>TRUSTED CLIENTS</h1>
                <p className='text-sm'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                <div className='bg-gray-200 mt-12 p-8 rounded-lg'>
                    <p className='text-sm'>{testimonials[0].content}</p>
                </div>
                {renderTestimonial(testimonials[0])}
            </div>

            {/* "Why Choose Us" section */}
            <div className="w-1/2 px-10">
                {renderWhyChooseUs()}
            </div>
        </div>
    )
}
