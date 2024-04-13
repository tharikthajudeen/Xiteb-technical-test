import React, { useState } from 'react';
import Cargo from '../Images/cargo.jpg';
import Ship01 from '../Images/ship01.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

const NavItem = ({ text, showCaret, onMouseEnter, onMouseLeave, children }) => (
    <li className="font-bold flex items-center relative flex-col" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className='flex items-center'>
            <span>{text}</span>
            {showCaret && <FontAwesomeIcon icon={faCaretDown} className="ml-1 text-sm text-black"/>}
        </div>
        <div className="absolute bg-white mt-8 left-0 w-48 z-10 p-2">
            {/* Render children (nested submenu) */}
            {children && <div className="submenu-container">{children}</div>}
        </div>
    </li>
);

export default function Header() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // State for submenu visibility
    const images = [Cargo, Ship01 /* Add other image URLs here */];

    const nextSlide = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    };

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    };

    return (
        <header className="flex flex-col bg-white">
            {/* Navigation */}
            <nav className="flex justify-between items-center mx-16 py-4">
                <div>
                    <h1 className="text-4xl font-bold">Cargo</h1>
                </div>
                <ul className="flex items-center space-x-6">
                    <div className="border-l-4 border-yellow-400 h-6"></div>
                    {/* Navigation items */}
                    <NavItem text="HOME" showCaret={true} onMouseEnter={() => setIsSubMenuOpen(true)} onMouseLeave={() => setIsSubMenuOpen(false)}>
                        {/* Nested submenu */}
                        {isSubMenuOpen && (
                            <ul className="submenu">
                                <li>Image Slider</li>
                                <li>Discover More</li>
                                {/* Add more submenu items here */}
                            </ul>
                        )}
                    </NavItem>
                    <NavItem text="PAGES" showCaret={false} />
                    <NavItem text="TRACKING" showCaret={true} />
                    <NavItem text="SERVICES" showCaret={true} />
                    <NavItem text="BLOG" showCaret={true} />
                    <li>
                        <button className="bg-yellow-400 p-2 px-4 text-white text-sm font-bold">GET A QUOTE</button>
                    </li>
                    <li>
                        <button className="bg-black p-2 px-4 text-white text-sm font-bold">SIGN IN</button>
                    </li>
                </ul>
            </nav>

            {/* Content */}
            <div className="relative">
                <div className="w-2/3 float-right mr-12">
                    <img src={images[currentImage]} alt="Slider Image" className="w-full object-cover h-auto" style={{ maxHeight: '400px' }} />
                </div>
                <div className="absolute bg-white w-1/3 h-4/5 top-8 left-14 p-10">
                    {/* Content inside the slider */}
                    <div className="flex my-2">
                        <div className="border-l-4 border-yellow-400 h-6 mx-2"></div>
                        <h2 className="text-md">LOGISTIC</h2>
                    </div>
                    <div>
                        <h2 className="text-5xl my-2">Best Shipping</h2>
                        <h2 className="text-5xl font-bold text-yellow-400 my-1">Partner</h2>
                        <p className="text-sm mt-2">Arnet. tempus egestas facilisis volutpat viverra molestie lobortis
                        posuere maecenas. molestie lobortis posuere maecenas. Eget
                        sapien, gravida nequi.</p>
                        <button className="bg-yellow-500 p-2 px-4 text-white mt-2 text-sm font-bold">DISCOVER MORE</button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 flex items-center px-4 py-4 bg-yellow-500">
                    <p className="mr-6 text-white">{currentImage + 1} / {images.length}</p>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} className="mr-4 text-white cursor-pointer" onClick={prevSlide} />
                    <FontAwesomeIcon icon={faLongArrowAltRight} className="text-white cursor-pointer" onClick={nextSlide} />
                </div>
                <div className="flex absolute top-16 flex-col right-0 mr-5 mb-0 pb-0 font-bold text-xs">
                    {"#CARGOTONLOGISTIC".split("").reverse().map((letter, index) => (
                        <span key={index} className="divide-y transform -rotate-90">{letter}</span>
                    ))}
                </div>
            </div>
        </header>
    );
}
