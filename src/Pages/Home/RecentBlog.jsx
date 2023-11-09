import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import { Link } from "react-router-dom";
import swal from "sweetalert";



const RecentBlog = ({recent}) => {
    const {user}=useContext(AuthContext)
    const email=user?.email;
    const {title,category,image,description,date,long_description,_id}=recent

    const handleWishList =()=>{
        const wishListObj ={email,title,category,image,description,date,long_description,blogId:_id}
       
          fetch('http://localhost:5000/wishlist',{
          method:'POST',
          headers:{
              'Content-type':'application/json'
          },
          body:JSON.stringify(wishListObj)
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          if(data.insertedId){
            swal("Blog added your WishList");
        }
      })
      }
    return (
        <div>
             <div className="card h-[500px] card-compact  bg-base-100 shadow-xl">
  <figure><img className=" h-[400px]" src={recent.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recent.title}</h2>
    <p className="text-sm" >{recent.description}</p>
    <h2 className="text-xl py-5   font-medium">Category:{recent.category}</h2>
    <div className="card-actions justify-between">
      <Link to={`/blogDetails/${recent._id}`}><button   className="btn btn-primary">Details</button></Link>
      <button onClick={handleWishList}   className="btn btn-primary">WishList</button>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default RecentBlog;