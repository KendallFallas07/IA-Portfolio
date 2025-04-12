import React from 'react';

interface CardProps {
  title: string;
  description: string;
  date?: string;
}

const Card: React.FC<CardProps> = ({ title, description, date }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {date && <p className="text-sm text-gray-500 mb-1">{date}</p>}
      <p>{description}</p>
    </div>
  );
};

export default Card;
