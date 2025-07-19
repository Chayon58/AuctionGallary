import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown text-2xl">
      <h1><span className='text-blue-800'>Auction</span><span className='text-amber-500 font-medium'>Gallary</span></h1>
      
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Home</a>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Auctions</a>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Categories</a>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">How to works</a>
  </div>
  <div className="navbar-end space-x-3">
      <div className="indicator">
        <img className='h-6 w-6' src="assets/Group 3466089.png" alt="" />
      </div>
      <div className="indicator ">
        <img className='h-8 w-8' src="assets/Ellipse 19.png" alt="" />
      </div>
   
  </div>
</div>
        </div>
    );
};

export default Navbar;