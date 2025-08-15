import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  image: string;
  name: string;
  type: string;
}

const ServiceCard = ({ id, image, name, type }: ServiceCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // handle fn for loading state
  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/services/${id}`);
    }, 1000);
  };

  return (
    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:shadow-green-500/50 transition ">
      {/* Image & Badge */}
      <div className="relative h-48 ">
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

      {/* Name & Button */}
      <div
        className="p-4 flex flex-col sm:flex-row sm:justify-around sm:items-center gap-3 dark:bg-gray-400 dark:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-poppins italic font-bold text-xl dark:text-white/100 tracking-wide">
          {name}
        </h3>
        <button
          disabled={isLoading}
          onClick={handleLoading}
          className="px-10 py-2 text-gray-800 font-medium font-poppins bg-gradient-to-r from-rose-200/80 to-indigo-200/80 backdrop-blur-md border-b border-indigo-300/40 shadow-lg rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer"
        >
          {isLoading ? (
            <span className="animate-spin">Loading...</span>
          ) : (
            "View Details"
          )}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
