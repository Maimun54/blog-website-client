import { useEffect, useState } from "react";


const BlogSecton = () => {
     
    const [recentBlog,setRecentBlog]=useState([])
      console.log(recentBlog)
    useEffect(()=>{
           fetch('http://localhost:5000/recentBlog')
           .then(res=>res.json())
           .then(data=>setRecentBlog(data))
    },[])
    return (
        <div>
        <h2 className="text-4xl text-center font-bold lg:py-20">Our Recent Blog</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 ">
         {
            recentBlog.map(recent=><div key={recent._id}>
        <div className="card h-[500px] card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-full h-[300px]" src={recent.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recent.title}</h2>
    <p className="text-sm" >{recent.description}</p>
    <h2 className="text-2xl py-2 font-medium">Category:{recent.category}</h2>
    <div className="card-actions justify-between">
      <button className="btn btn-primary">Details</button>
      <button className="btn btn-primary">WishList</button>
    </div>
  </div>
</div>
            </div>)
         }
         </div>
        </div>
    );
};

export default BlogSecton;