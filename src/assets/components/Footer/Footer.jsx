import React from 'react';

const Footer = () => {
    return (
        <div className='my-16'>
            <footer className="footer footer-horizontal footer-center bg-gray-200 p-10">
  <aside className='my-10'>
    <div>
    <div className="dropdown text-2xl">
      <h1><span className='text-blue-800'>Auction</span><span className='text-amber-500 font-medium'>Gallary</span></h1>
    </div>
    </div>
    <div className='flex gap-6'>
        <p>Bid.</p>
        <p>Win.</p>
        <p>Own.</p>
    </div>
    <div className='flex gap-6'>
        <p>Home</p>
        <p>Auctions</p>
        <p>Categories</p>
        <p>How to works</p>
    </div>
    <p>© {new Date().getFullYear()} AuctionHub. All rights reserved</p>
  </aside>

</footer>
        </div>
    );
};

export default Footer;