import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvide";
// const category =[
//   'Child_Develop_Parenting',
//   'Child_Development',
//   'Health_Safety ',
//   'Education_Learning',
//    'Healing_Growth',
//   'Parenting_Myths']

const Blog = ({blog}) => {
  const {user}=useContext(AuthContext)
  const email=user?.email;
  const {title,_id,category,image,description,date,long_description}=blog
  // const wishList ={blog,email}
  console.log(email)
    const handleWishList =()=>{
      const wishListObj ={email,title,category,image,description,date,long_description}
      // const email =user?.email
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
                  <figure><img className=" h-[400px]" src={image} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-sm" >{description}</p>
                    <h2 className="text-2xl py-2 font-medium">Category:{category}</h2>
                    <div className="card-actions justify-between">
                      <Link to={`/blogDetails/${_id}`}><button   className="btn btn-primary">Details</button></Link>
                      <button onClick={handleWishList} className="btn btn-primary">WishList</button>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default Blog;