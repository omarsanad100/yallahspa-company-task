import DesktopNavbar from "./DesktopNavbar";
import imageUrl from "/assets/image.png";
const Navbar = () => {
  return (
    <nav className="w-full antialiased text-white bg-gradient-to-r from-white/30 to-green-500/40 backdrop-blur-md border-b border-green-300/30 shadow-lg fixed top-0 z-50 transition-all duration-500 rounded-b-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <img src={imageUrl} alt="Logo" className="h-15 w-15 rounded-full" />
          <DesktopNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
