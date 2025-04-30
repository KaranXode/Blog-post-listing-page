import { Route, Routes } from "react-router-dom";
import DetailsPage from "../Layout/DetailsPage";
import Layout from "../Layout/Layout";
import NotFound from "../Components/NotFound/NotFound";

export default function RouteOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
}
