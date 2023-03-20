import React from 'react';
import Footer from './Components/Footer/Footer';
import Events from './Pages/Events/Events';

function App() {
  return (
    <div className='bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2'>
      <Events/>
      <Footer/>
    </div>
  )
}

export default App;

