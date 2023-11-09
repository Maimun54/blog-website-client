import axios from "axios";
import {  useEffect, useState } from "react";

import 'react-photo-view/dist/react-photo-view.css';
import RecentBlog from "./RecentBlog";
const BlogSecton = () => {
  
    const [recentBlog,setRecentBlog]=useState([])
  
      console.log(recentBlog)
    useEffect(()=>{
          //  fetch('http://localhost:5000/allBlog')
          //  .then(res=>res.json())
          //  .then(data=>setRecentBlog(data))
        axios.get('http://localhost:5000/allBlog')
        .then(res=>{
          setRecentBlog(res.data)
        })
    },[])
    
    // const {title,_id,category,image,description,date,long_description}=recentBlog
    
    // console.log(email)
      
    return (
        <div>
        <h2 className="text-4xl text-center font-bold lg:py-20">Our Recent Blog</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 ">
         {
            recentBlog.slice(-6).map(recent=><RecentBlog key={recent._id} recent={recent}></RecentBlog>
          
            )
         }
         
         </div>
        </div>
    );
};

export default BlogSecton;