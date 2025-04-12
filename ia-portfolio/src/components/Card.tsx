interface CardProps {
  title: string;
  description: string;
  date?: string;
  zipUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, date, zipUrl }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 transform flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {date && <p className="text-sm text-gray-500 mb-1">{date}</p>}
        <p className="mb-4">{description}</p>
      </div>

      {zipUrl && (
        <a
          href={zipUrl}
          download
          className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition text-sm text-center"
        >
          Descargar material
        </a>
      )}
    </div>
  );
};

export default Card;