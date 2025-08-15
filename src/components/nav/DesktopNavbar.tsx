import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ModeToggle from "../theme/ModeToggle";

const DesktopNavbar = () => {
  return (
    <nav className="flex items-center justify-end gap-4 w-full">
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link
          to="/services"
          className="flex items-center gap-2 text-gray-800 font-medium px-4 py-2 rounded-lg shadow transition-all 
          duration-200 hover:bg-gray-100  dark:text-gray-200 hover:dark:bg-gray-400"
        >
          <HomeIcon className="h-6 w-6" /> Home
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
