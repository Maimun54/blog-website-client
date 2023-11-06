

const AddBlog = () => {
    const handleAddBlog=e=>{
        e.preventDefault();
        const form =e.target
        const title =form.title.value;
        const category =form.category_name.value;
        const image =form.photo.value;
        const date =form.date.value;
        const long_description =form.Long_description.value;
    
        const description =form.description.value;
        
        const newBlogs={title,category,image,description,date,long_description}
        console.log(newBlogs)
        //send data server side
        fetch('http://localhost:5000/allBlog',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(newBlogs)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
          <div className="mb-10">
             <div className="text-center">
                <h2 className="text-4xl font-bold py-3">Add Your Blog</h2>
                
            </div>
            <form  onSubmit={handleAddBlog}  className=" mx-auto md:w-3/4 lg:w-2/5">

  
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Title</span>
  </label>
  <input  type="text" name="title"  required placeholder="Type your Blog Title" className="input input-bordered"  />
</div>
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Category Name</span>
  </label>
  <select name="category_name" className="select select-bordered w-full ">
  {/* <option disabled selected>Brand Name</option> */}
  <option>Child Develop Parenting</option>
  <option>Child Development</option>
  <option>Health and Safety </option>
  <option>Education and Learning</option>
  <option>Healing and Growth</option>
  <option>Parenting Myths</option>
  
</select>
</div>
 
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <input  type="text" name="photo"  required placeholder="Type your Image url" className="input input-bordered"  />
</div>
  
<div className="form-control">
  <label className="label">
    <span className="label-text">Short Description</span>
  </label>
  <input type="text" required name="description" placeholder="Type Short Description" className="input input-bordered"  />
  
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Long Description</span>
  </label>
  <input type="text" required name="Long_description" placeholder="Type Long Description" className="input input-bordered w-[600px] h-[100px]"  />
  
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">Date</span>
  </label>
  <input type="date" required name="date" placeholder="Select Date" className="input input-bordered"  />
  
</div>
 

<div className="form-control mt-6">
  <button className="btn btn-primary">Add Now </button>
  
</div>
  </form>
        </div>  
        </div>
    );
};

export default AddBlog;