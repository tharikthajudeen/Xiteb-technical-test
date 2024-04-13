import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faLocationDot,
    faChevronRight,
    faHandPointRight,
    faCopyright,
    faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faVimeo,
    faTwitter,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import Icon from '../Images/logo.jpg';
import Cargo from '../Images/cargo.jpg';
import Lorry from '../Images/lorry.jpg';

export default function Footer() {
    return (
        <footer className="bg-gray-500 px-24 py-12 text-white">
            {/* Newsletter Section */}
            <div className="flex justify-between">
                <div>
                    <h2 className="font-bold text-2xl">Weekly Newsletter</h2>
                    <p className="mt-2 text-lg">There are many variations of passages of Lorem Ipsum available.</p>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="rounded-md p-3 border-none w-72"
                    />
                    <button className="ml-2 p-3 bg-yellow-500 text-white font-bold">Subscribe</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
                {/* About Us */}
                <div>
                    <h2 className="font-bold">About Us</h2>
                    <div className="border-t border-dotted border-orange-400 w-1/5 mt-2 mb-4"></div>
                    <p className="text-gray-400 mb-4">Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex items-center mb-4">
                        <FontAwesomeIcon icon={faPhone} className="text-gray-400 mr-2" />
                        <p className="text-gray-400">(+94) 434 757542</p>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 mr-2" />
                        <p className="text-gray-400">Lily Ave, Colombo 00600</p>
                    </div>
                </div>

                {/* Latest News */}
                <div>
                    <h2>Latest News</h2>
                    <div className="border-t border-dotted border-orange-400 w-1/5 mt-2 mb-4"></div>
                    <div className="flex flex-col text-gray-400">
                        <div className="flex mb-2">
                            <FontAwesomeIcon icon={faChevronRight} className="text-orange-400 mr-2" />
                            <div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                <p>5 Minutes Ago</p>
                            </div>
                        </div>
                        <div className="flex mb-2">
                            <FontAwesomeIcon icon={faChevronRight} className="text-orange-400 mr-2" />
                            <div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                <p>5 Minutes Ago</p>
                            </div>
                        </div>
                        {/* Add more news items here */}
                    </div>
                </div>

                {/* Customer Service */}
                <div>
                    <h2>Customer Service</h2>
                    <div className="border-t border-dotted border-orange-400 w-1/5 mt-2 mb-4"></div>
                    <div className="flex items-center text-gray-400">
                        <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
                        <p>Support Forums</p>
                        {/* Add more service options here */}
                    </div>
                </div>

                {/* Image Gallery */}
                <div>
                    <h2>Image Gallery</h2>
                    <div className="border-t border-dotted border-orange-400 w-1/5 mt-2 mb-4"></div>
                    <div className="flex flex-wrap">
                        <img src={Cargo} alt="Cargo" className="w-1/3 m-1" />
                        <img src={Icon} alt="Icon" className="w-1/3 m-1" />
                        <img src={Lorry} alt="Lorry" className="w-1/3 m-1" />
                        {/* Add more images here */}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between mt-10">
                <p className="text-sm">&copy; 2021 All Rights Reserved. Site By Xiteb</p>
                <div className="flex space-x-2">
                    <FontAwesomeIcon icon={faFacebook} className="text-xl text-gray-400 hover:text-blue-400" />
                    <FontAwesomeIcon icon={faVimeo} className="text-xl text-gray-400 hover:text-blue-400" />
                    <FontAwesomeIcon icon={faTwitter} className="text-xl text-gray-400 hover:text-blue-400" />
                    <FontAwesomeIcon icon={faInstagram} className="text-xl text-gray-400 hover:text-blue-400" />
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-400 hover:text-blue-400" />

                    {/* Back to Top Button */}
                    <div className="text-white bg-orange-400 p-2">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
