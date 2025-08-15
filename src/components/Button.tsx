import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BackButton = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/services");
    }, 500);
  };

  return (
    <div className="flex justify-end mb-4 cursor-pointer">
      <button
        onClick={handleClick}
        disabled={loading}
        className={`inline-flex items-center gap-2 ${
          loading
            ? "bg-gray-400"
            : "px-10 py-2  font-medium font-poppins bg-gradient-to-r from-white/80 to-green-500/80 backdrop-blur-md border-b border-green-300/40 shadow-lg  rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer"
        } text-gray-800 font-medium px-4 py-2 rounded-lg shadow transition-all duration-200`}
      >
        {loading ? "Loading..." : "Back to home →"}
      </button>
    </div>
  );
};

export default BackButton;
