import { Routes, Route, Navigate } from "react-router-dom";
import Services from "./page/Services";
import ServiceDetails from "./page/ServiceDetails";
import Navbar from "./components/nav/Navbar";
import { useTheme } from "./components/theme/ThemeProvider";

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors relative
    data-[theme-mode=light]:bg-white
    data-[theme-mode=dark]:bg-gradient-to-br
    data-[theme-mode=dark]:from-black/80
    data-[theme-mode=dark]:via-gray-900/100
    data-[theme-mode=dark]:to-black/60
    data-[theme-mode=dark]:backdrop-blur-xl"
      data-theme-mode={theme}
    >
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Navigate to="/services" />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
