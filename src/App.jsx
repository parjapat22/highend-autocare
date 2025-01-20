import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />

          <Route path="services" element={<Services />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
