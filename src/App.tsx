import { Routes, Route, Navigate } from "react-router-dom";
import Services from "./page/Services";
import ServiceDetails from "./page/ServiceDetails";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return (
    <div className="">
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
