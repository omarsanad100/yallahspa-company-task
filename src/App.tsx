import { Routes, Route, Navigate } from "react-router-dom";
import Services from "./page/Services";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/services" />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default App;
