import { useContext, useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvide";
import axios from "axios";


const WishList = () => {
    const {user}=useContext(AuthContext)
    const [wishListBlog,setWishListBlog]=useState([])
    useEffect(()=>{
        axios.get(`https://blog-website-server-pearl.vercel.app/wishlist?email=${user?.email}`)
        .then(res=>{
            setWishListBlog(res.data)
        })
    },[user?.email])

    const handleRemove = _id=>{
   
        fetch(`https://blog-website-server-pearl.vercel.app/wishlist/${_id}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(wishListBlog)
           })
           .then(res=>res.json())
           .then(data=>{
            console.log(data)
            const remainingWish =wishListBlog.filter(blog=>blog._id !==_id)
            setWishListBlog(remainingWish)
        
           })
       }
    // const blogWishLists =useLoaderData()
   
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 " >
                {
                 wishListBlog.map(wishList=><div key={wishList._id}>
                <div className="card h-[500px] card-compact  bg-base-100 shadow-xl">
                 <figure><img className=" h-[400px]" src={wishList.image} alt="Shoes" /></figure>
                <div className="card-body">
                 <h2 className="card-title">{wishList.title}</h2>
                <p className="text-sm" >{wishList.description}</p>
                <h2 className="text-2xl py-2 font-medium">Category:{wishList.category}</h2>
             <div className="card-actions justify-between">
                    <Link to={`/blogDetails/${wishList.blogId}`}><button   className="btn btn-primary">Details</button></Link>
                <button onClick={()=>handleRemove(wishList._id)} className="btn btn-primary">Remove</button>
                                </div>
                              </div>
                            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WishList;