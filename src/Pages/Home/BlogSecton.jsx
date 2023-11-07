import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";


const BlogSecton = () => {
     
    const [recentBlog,setRecentBlog]=useState([])
  
      console.log(recentBlog)
    useEffect(()=>{
          //  fetch('http://localhost:5000/allBlog')
          //  .then(res=>res.json())
          //  .then(data=>setRecentBlog(data))
        axios('http://localhost:5000/allBlog')
        .then(res=>{
          setRecentBlog(res.data)
        })
    },[])
  //   const handleWishList =()=>{
  //     fetch('http://localhost:5000/wishlist',{
  //     method:'POST',
  //     headers:{
  //         'Content-type':'application/json'
  //     },
  //     body:JSON.stringify(recent)
  // })
  // .then(res=>res.json())
  // .then(data=>{
  //     console.log(data)
  //     if(data.insertedId){
  //       swal("Blog added your WishList");
  //   }
  // })
  // }
    return (
        <div>
        <h2 className="text-4xl text-center font-bold lg:py-20">Our Recent Blog</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 ">
         {
            recentBlog.slice(-6).map(recent=><div key={recent._id}>
        <div className="card h-[500px] card-compact  bg-base-100 shadow-xl">
  <figure><img className=" h-[400px]" src={recent.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recent.title}</h2>
    <p className="text-sm" >{recent.description}</p>
    <h2 className="text-2xl py-2 font-medium">Category:{recent.category}</h2>
    <div className="card-actions justify-between">
      <Link to={`/blogDetails/${recent._id}`}><button   className="btn btn-primary">Details</button></Link>
      <button  className="btn btn-primary">WishList</button>
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