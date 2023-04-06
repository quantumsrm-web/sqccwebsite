import React from 'react';

function Events() {
return (
    <div>        
    <h1 className='text-center font-bold text-white text-6xl pt-3.5 tracking-wider'>
        EVENTS
    </h1>
    <div className="flex flex-wrap justify-center gap-20 mt-20">
        <div className="card w-80 h-120 bg-slate-800 rounded-xl p-5">
        <img
            className="w-full h-60 object-cover rounded-xl"
            src=""
            alt="Card"
        />
        <h1 className="mt-5 text-white text-center text-2xl font-medium">QuantAi Fusion</h1>
        <p className="mt-3 text-white text-center">March 27-28th</p>
        <p className=' text-white text-center'>Venue</p>
        </div>
        <div className="card relative w-80 h-120 bg-slate-800 rounded-xl p-5">
        <img
            className="w-full h-60 object-cover rounded-xl"
            src=""
            alt="Card"
        />
        <h1 className="mt-5 text-white text-center text-2xl font-medium">QuantAi Fusion</h1>
        <p className="mt-3 text-white text-center">March 27-28th</p>
        <p className=' text-white text-center'>Venue</p>
        </div>
    </div>
    </div>
    );
};

export default Events;