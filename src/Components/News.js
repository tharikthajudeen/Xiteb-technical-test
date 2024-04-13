import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import Lorry from '../Images/lorry.jpg';
import AirLine01 from '../Images/airline01.jpeg';
import Ship01 from '../Images/ship01.jpg';
import Cargo from '../Images/cargo.jpg';

const imageUrls = [Lorry, AirLine01, Ship01, Cargo]; // Array of image URLs

function NewsItem({ title, author, comments, content, imageUrl }) {
  return (
    <div className="flex items-start h-full w-full bg-gray-300 text-black m-4 md:w-1/2 lg:w-1/3 hover:bg-blue-400 hover:text-white rounded-lg shadow-lg">
      <div className="w-1/3 overflow-hidden rounded-l-lg">
        <img src={imageUrl} alt="News" className="h-[220px] w-full object-cover" />
      </div>
      <div className="w-2/3 p-5">
        <div>
          <h1 className="font-bold text-xl mb-4">{title}</h1>
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-3">{author}</p>
          <FontAwesomeIcon icon={faComments} className="mr-3" />
          <p className="mr-3">{comments}</p>
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default function News() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Latest News</h1>
        <p className="text-lg">Integer Congue Elite</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {imageUrls.map((imageUrl, index) => (
          <NewsItem
            key={index}
            title="Cururature Quis"
            author="Admin"
            comments={15}
            content="Pellentesque habitant morbi tristiquesene ctus eft netus eft matesuada famesturps egestas. Aenean ron dovec"
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
