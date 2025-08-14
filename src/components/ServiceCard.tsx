import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  image: string;
  type: string;
};

const ServiceCard = ({ id, name, image, type }: Props) => {
  return (
    <Link
      to={`/services/${id}`}
      className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:text-green-600"
    >
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <span
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
            type === "custom"
              ? "bg-purple-100 text-purple-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {type === "custom" ? "Package" : "Single"}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
      </div>
    </Link>
  );
};

export default ServiceCard;
