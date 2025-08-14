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
            : "bg-green-600 hover:bg-green-700 cursor-pointer"
        } text-white font-medium px-4 py-2 rounded-lg shadow transition-all duration-200`}
      >
        {loading ? "Loading..." : "Back to home →"}
      </button>
    </div>
  );
};

export default BackButton;
