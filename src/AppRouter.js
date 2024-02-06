import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Interface from "./Pages/Interface";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./Pages/App";



export default function AppRouter() {
  return (
    <>
    <ChakraProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<App />} />
          <Route path="interface" element={<Interface />} />
          </Route>
        </Routes>
      </Router>
      </ChakraProvider>
    </>
  );
}
