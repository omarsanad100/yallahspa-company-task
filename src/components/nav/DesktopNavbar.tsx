import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <nav className="flex items-center justify-end gap-4 w-full">
      <div className="flex items-center gap-4">
        <Link to="/services">
          <HomeIcon className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
