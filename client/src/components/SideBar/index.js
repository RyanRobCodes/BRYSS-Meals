import React from "react"; 
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC } from "../../utils/queries";


const Sidebar = ({currentPage, handlePageChange}) => {
    const { data: userData } = useQuery(QUERY_ME_BASIC);

<<<<<<< HEAD
    let currentUser = userData?.me?.username
=======
    // let currentUser = userData.me.username
    

    console.log(userData)
>>>>>>> aba9a9c3551147f2b316545ff2d5704b2b1db832

    return (
    <div className='sidebar'>
        <div className={`sidebar-logo navLi  ${currentPage==='Home' ? 'navActive' : ' '}`}>
<<<<<<< HEAD
            <a href="#Home" onClick={() => handlePageChange('Home')}>Hi, {currentUser}</a>
=======
            <a href="#Home" onClick={() => handlePageChange('Home')}>Hi, 
            {/* {currentUser} */}
            </a>
>>>>>>> aba9a9c3551147f2b316545ff2d5704b2b1db832
        </div>
        <nav className="sidebar-menu">
            <ul>
                <li className={`navLi py-2  ${currentPage==='Shop' ? 'navActive' : ' '}`}>
                    <a href="#Shop" onClick={() => handlePageChange('Shop')}>Shop</a>
                </li>
                <li className={`navLi py-2 ${currentPage==='Profile' ? 'navActive' : ' '}`}>
                    <a href="#Profile" onClick={() => handlePageChange('Profile')}>User Profile</a>
                </li>
                <li className={`navLi py-2 ${currentPage==='Order' ? 'navActive' : ' '}`}>
                    <a href="#Order" onClick={() => handlePageChange('Order')}>Orders</a>
                </li>
                <li className={`navLi py-2 ${currentPage==='Review' ? 'navActive' : ' '}`}>
                    <a href="#Review" onClick={() => handlePageChange('Review')}>Reviews</a>
                </li>
            </ul>
        
        </nav>
    </div>
    );
};

export default Sidebar;