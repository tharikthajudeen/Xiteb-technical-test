import React from 'react';

// Statistic component
function Statistic({ value, description }) {
  return (
    <div className="relative p-8 text-center">
      {/* Main value */}
      <span className="text-8xl font-bold text-white text-shadow">{value}</span>
      {/* Overlay with description */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-shadow">{value}</h1>
        <h1 className="text-md font-bold text-shadow">{description}</h1>
      </div>
    </div>
  );
}

// Stats component
export default function Stats() {
  return (
    <div className="flex justify-between p-10">
      {/* Render statistics */}
      <Statistic value={890} description="Delivered packages" />
      <Statistic value={137} description="Countries covered" />
      <Statistic value={740} description="Tons of Goods" />
      <Statistic value={640} description="Satisfied Clients" />
    </div>
  );
}
