import Adidas from '../Images/adidas.webp';
import Chanel from '../Images/chanel.webp';
import Nike from '../Images/nike.webp';
import Doors from '../Images/doors.webp';

export default function Logo() {
  // Array of logo sources
  const logos = [Adidas, Chanel, Nike, Doors]; // Adjust as needed

  return (
    <ul className="flex flex-row items-center justify-between px-20 my-20">
      {logos.map((logo, index) => (
        <li key={index} className="mr-5">
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-32 h-32 transition duration-300 transform hover:scale-110"
          />
        </li>
      ))}
    </ul>
  );
}
