import { Route, Routes } from "react-router-dom";
import Home from "../classcomponents/home";
import About from "../classcomponents/about";
import Contact from "../classcomponents/contact";
import Login from "../classcomponents/login";
import Product from "../classcomponents/product";
import PrivateRoutes from "./PrivateRoute";
import AudioGallery from "../classcomponents/async";
import Audio from "../classcomponents/audio";
import FilterFunction from "../classcomponents/filterfunction";
import FilterClass from "../classcomponents/filterclass";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<PrivateRoutes><About /></PrivateRoutes>} />
      <Route path="/contact" element={<PrivateRoutes><Contact /></PrivateRoutes>} />
      <Route path="/product" element={<PrivateRoutes><Product /></PrivateRoutes>} />
      <Route path="/login" element={<Login />} />
      <Route path="/audio-function" element={< AudioGallery />} />
      <Route path="/audio-class" element={<Audio />} />
      <Route path="/filter-function" element={<FilterFunction />} />
      <Route path="/filter-class" element={<FilterClass />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default AllRoutes;
