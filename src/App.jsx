import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import Footer from './assets/components/Footer/Footer'
import Hero from './assets/components/Hero/Hero'
import Navbar from './assets/components/Navbar/Navbar'
import { ImCancelCircle } from "react-icons/im";


function App() {

  const [favourite,setFavourite]=useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const handleFavourite=(blog)=>{
    setFavourite([...favourite,blog])
  }
const handleTotalAmount = (amount) =>{
  const newAmount = totalCount+amount;
    setTotalCount(newAmount);
}

console.log(totalCount);

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>


    <div className='Auction mt-20 flex flex-col items-start'>
      <h1 className='text-blue-900 font-medium text-2xl'>Active Auctions</h1>
      <p className='text-md font-medium'>Discover and bid on extraordinary items</p>
    </div>

    <div className="main-container flex gap-8">
    <div className="left-container w-[70%] mt-6">
   
    <Blogs handleFavourite={handleFavourite} handleTotalAmount={handleTotalAmount}></Blogs>

    </div>

    <div className="right-container w-[30%] h-[20%] mt-10 border border-gray-300 rounded-3xl bg-white">
  <div className="flex items-center pl-20 border-b-2 border-gray-200 gap-4">
    <img className="items-center" src="/public/assets/Vector.png" alt="" />
    <h1 className="mt-4 pb-4 font-semibold text-xl text-blue-900">Favourite Items</h1>
  </div>

  {favourite.length === 0 && (
    <div className="middle-container mt-6 items-center border-b-2 border-gray-300 pb-8 text-center">
      <h1 className="font-semibold">No favorites yet</h1>
      <p className="mt-2 text-gray-500">
        Click the heart icon on any item <br /> to add it to your favorites
      </p>
    </div>
  )}

  {favourite.length > 0 &&
    favourite.map((marked, index) => (
      <div className="pb-6 pl-6 border-b-2 border-gray-200" key={index}>
        <div className="flex gap-2">
          <img className="w-[20%] mt-8" src={marked.image} alt="" />
          <div className="flex items-center gap-4 w-full">
            <p className="text-sm font-medium text-gray-800">{marked.title}</p>
            <button className="cross ml-2 text-black hover:text-red-700">
              <ImCancelCircle size={18} />
            </button>
          </div>
        </div>
        <div className="flex gap-4 ml-20 -mt-4 text-sm font-bold text-gray-600">
          <p>${marked.currentBidPrice}</p>
          <p>Bids: {marked.bidsCount}</p>
        </div>
      </div>
    ))}
      <div className='flex gap-30 -mt-4 mb-4 px-20 py-4 items-center'>
  <h1 className='pt-6 font-semibold gap-6'>Total bids Amount: ${totalCount}</h1>
</div>

</div>
      </div>


    <Footer></Footer>

    </>
  )
}

export default App
