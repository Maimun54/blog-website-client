
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;

