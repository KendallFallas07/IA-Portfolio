import React from 'react';
import Card from '../components/Card';
import { classes } from '../data/class';

export default function Clases() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Clases de Inteligencia Artificial</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {classes.map((myClass, index) => (
          <Card key={index} title={myClass.title} description={myClass.description} date={myClass.date} />
        ))}
      </div>
    </div>
  );
}
