import React from 'react';

const Hero = () => {
    return (
        <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent), url('/assets/Banner-min.jpg')`
          }}
        >
        
  <div className="flex flex-col items-start">
  <h1 className="text-4xl mt-28 ml-14 text-white">
    Bid on Unique Items from</h1>
    <h1 className='text-4xl ml-14 text-white'>Around the World</h1>
 <p className=' text-sm mt-4 text-gray-400 ml-14'>Discover rare collectibles, luxury goods, and vintage</p>
 <p className=' text-sm text-gray-400 ml-14'>treasures in our curated auctions</p>
 <button className="btn ml-14 mt-4 border-r-8 rounded-3xl ">Explore Auctions</button>
  </div>
</div>

    );
};

export default Hero;