import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlog from "../Pages/AllBlog/AllBlog";
import FeatureBlog from "../Pages/FeatureBlog/FeatureBlog";
import WishList from "../Pages/WishList/WishList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/recentBlog')
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/addBlog',
          element:<AddBlog></AddBlog>
        },
        {
          path:'/allBlog',
          element:<AllBlog></AllBlog>,
          loader:()=>fetch('http://localhost:5000/allBlog')
        },
        {
          path:'/featuredBlogs',
          element:<FeatureBlog></FeatureBlog>
        },
        {
          path:'/wishlist',
          element:<WishList></WishList>
        }
      ]
    },
  ]);

  export default router