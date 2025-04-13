import React from 'react';
import Card from '../../components/Card'; 
import { pids } from '../../data/pids'; 

const Pids = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 overflow-hidden">
      <h1 className="mt-5 md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 relative z-10">
        Proyectos de Investigación Dirigida 
      </h1>

      <div className="mx-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {pids.map((myPid, index) => (
          <Card 
            key={index}
            title={myPid.title}
            description={myPid.description}
            date={myPid.date}
            zipUrl={myPid.zipUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Pids;
