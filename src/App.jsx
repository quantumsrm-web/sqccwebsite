import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Events from "./Pages/Events/Events";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
function App() {
  return (
    // <div className='bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2'>
    //   <Events/>
    //   <Footer/>
    // </div>

    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Landing />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
