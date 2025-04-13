import React from 'react';
import Card from '../../components/Card'; 
import { labs } from '../../data/labs'; 

const Labs = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 overflow-hidden">
      <h1 className="mt-5 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 relative z-10">
        Laboratorios 
      </h1>

      <div className="mx-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {labs.map((myLab, index) => (
          <Card 
            key={index}
            title={myLab.title}
            description={myLab.description}
            date={myLab.date}
            zipUrl={myLab.zipUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Labs;
