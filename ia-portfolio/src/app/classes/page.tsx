import React from 'react';
import Card from '../../components/Card'; 
import { classes } from '../../data/class';

const Classes = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 overflow-hidden">
      <h1 className="mt-5 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 relative z-10">
        Clases 
      </h1>

      <div className="mx-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {classes.map((myClass, index) => (
          <Card 
            key={index}
            title={myClass.title}
            description={myClass.description}
            date={myClass.date}
            zipUrl={myClass.zipUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Classes;
