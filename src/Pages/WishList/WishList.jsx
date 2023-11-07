import { useContext, useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvide";
import axios from "axios";


const WishList = () => {
    const {user}=useContext(AuthContext)
    const [wistListBlog,setWishListBlog]=useState([])
    useEffect(()=>{
        axios(`http://localhost:5000/wishlist?email=${user?.email}`)
        .then(res=>{
            setWishListBlog(res.data)
        })
    },[user?.email])
    // const blogWishLists =useLoaderData()
   
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 " >
                {
                 wistListBlog.map(wishList=><div key={wishList._id}>
                <div className="card h-[500px] card-compact  bg-base-100 shadow-xl">
                 <figure><img className=" h-[400px]" src={wishList.image} alt="Shoes" /></figure>
                <div className="card-body">
                 <h2 className="card-title">{wishList.title}</h2>
                <p className="text-sm" >{wishList.description}</p>
                <h2 className="text-2xl py-2 font-medium">Category:{wishList.category}</h2>
             <div className="card-actions justify-between">
                    <Link to={`/blogDetails/${wishList._id}`}><button   className="btn btn-primary">Details</button></Link>
                     <button className="btn btn-primary">Remove</button>
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