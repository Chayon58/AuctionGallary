import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Blog = ({blog,handleFavourite,handleTotalAmount}) => {
    
    // console.log(blog);
    return (
        <div>
            
           <div className="overflow-x-auto">
  <table className="table border-b border-gray-300">
    
    <tbody>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask h-12 w-12">
              <img src={blog.image} alt={blog.title}/>
              </div>
            </div>
            <div>
              <div className="font-bold">{blog.title}</div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="current-bid pr-40 font-bold">${blog.currentBidPrice}</div>
          </div>
        </td>
        <div>
            <div className="time mt-5 font-medium pr-4">{blog.timeLeft}</div>
        </div>
        <th>
        <button onClick={()=>{handleFavourite(blog);handleTotalAmount(blog.currentBidPrice); toast.success("Item added to your Favourite lists");}}><MdFavoriteBorder className=' hover:text-red-700 '  size={25}/></button><ToastContainer/>
        </th>
      </tr>
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default Blog;