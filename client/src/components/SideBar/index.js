import React from "react"; 
import { useQuery } from '@apollo/client';
import { QUERY_ME } from "../../utils/queries";


const Sidebar = ({currentPage, handlePageChange}) => {
    const { data: userData } = useQuery(QUERY_ME);

    let currentUser = userData?.me?.username

    return (
    <div className='sidebar'>
        <div className={`sidebar-logo`}>
            <a href="#Home" onClick={() => handlePageChange('Shop')}>Hi, {currentUser}</a>
        </div>
        <nav className="sidebar-menu">
            <ul className="sidebar-ul">
                <li className={`navLi py-2  ${currentPage==='Shop' ? 'navActive' : ' '}`}>
                    <a href="#Shop" onClick={() => handlePageChange('Shop')}>Shop</a>
                </li>
                <li className={`navLi py-2 ${currentPage==='Profile' ? 'navActive' : ' '}`}>
                    <a href="#Profile" onClick={() => handlePageChange('Profile')}>Profile</a>
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