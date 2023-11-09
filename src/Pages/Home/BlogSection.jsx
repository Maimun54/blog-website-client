import axios from "axios";
import {  useEffect, useState } from "react";

import 'react-photo-view/dist/react-photo-view.css';
import RecentBlog from "./RecentBlog";
const BlogSection = () => {
  
    const [recentBlog,setRecentBlog]=useState([])
  
      // console.log(recentBlog)
    useEffect(()=>{  
        axios.get('https://blog-website-server-pearl.vercel.app/allBlog')
        .then(res=>{
          setRecentBlog(res.data)
        })
    },[])
    
    // const {title,_id,category,image,description,date,long_description}=recentBlog
    
    // console.log(email)
      
    return (
        <div>
        <h2 className="text-4xl text-center font-bold py-20">Our Recent Blog</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 ">
         {
            recentBlog.slice(-6).map(recent=><RecentBlog key={recent._id} recent={recent}></RecentBlog>
          
            )
         }
         
         </div>
        </div>
    );
};

export default BlogSection;