// import { Link } from "react-router-dom";


// const WishPage = ({wishList}) => {

//     const handleRemove = _id=>{
   
//         fetch(`http://localhost:5000/wishlist/${_id}`,{
//             method:'DELETE',
//             headers:{
//                 'content-type':'application/json'
//             },
//             body:JSON.stringify(wishList)
//            })
//            .then(res=>res.json())
//            .then(data=>{
//             console.log(data)
    
//         //   const remainingCartProduct =cartData.filter(cart=>cart._id !==_id)
//         //   setCartData(remainingCartProduct)
//            })
//        }
         
//     return (
//         <div>
//             <div className="card h-[500px] card-compact  bg-base-100 shadow-xl">
//                  <figure><img className=" h-[400px]" src={wishList.image} alt="Shoes" /></figure>
//                 <div className="card-body">
//                  <h2 className="card-title">{wishList.title}</h2>
//                 <p className="text-sm" >{wishList.description}</p>
//                 <h2 className="text-2xl py-2 font-medium">Category:{wishList.category}</h2>
//              <div className="card-actions justify-between">
//                     <Link to={`/blogDetails/${wishList._id}`}><button   className="btn btn-primary">Details</button></Link>
//                 <button onClick={()=>handleRemove(wishList._id)} className="btn btn-primary">Remove</button>
//                                 </div>
//                               </div>
//                             </div>
//         </div>
//     );
// };

// export default WishPage;