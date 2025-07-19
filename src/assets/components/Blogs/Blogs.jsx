import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleFavourite,handleTotalAmount}) => {

    const[blogs,setBlogs]= useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])

    // console.log(blogs);
    return (
        <div>
            <thead>
      <div className='gap-6 border-b-1 border-gray-300 '>
      <thead>
    <tr className="text-left items-center">
      <th className="px-4">Items</th>
      <th className="px-58 ">Current Bid</th>
      <th className="py-4 pr-10"> Time Left</th>
      <th className="">Bid Now</th>
    </tr>
  </thead>
      </div>
    </thead>
            <div className="all-blogs">
                {
                    blogs.map((blog)=> <Blog key={blog.id} blog={blog} handleFavourite={handleFavourite} handleTotalAmount={handleTotalAmount}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;