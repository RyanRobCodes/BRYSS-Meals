import React from "react"; 

const Sidebar = ({currentPage, handlePageChange}) => {
    console.log ("hello?")


    return (
    <div className='sidebar'>
        <div className={`sidebar-logo navLi col-3  ${currentPage==='Home' ? 'navActive' : ' '}`}>
            <a href="#Home" onClick={() => handlePageChange('Home')}>Hi, username</a>
        </div>
        <nav className="sidebar-menu">
            <ul>
                <li className={`navLi col-3  ${currentPage==='Shop' ? 'navActive' : ' '}`}>
                    <a href="#Shop" onClick={() => handlePageChange('Shop')}>Shop</a>
                </li>
                <li className={`navLi col-3 ${currentPage==='Profile' ? 'navActive' : ' '}`}>
                    <a href="#Profile" onClick={() => handlePageChange('Profile')}>User Profile</a>
                </li>
                <li className={`navLi col-3 ${currentPage==='Order' ? 'navActive' : ' '}`}>
                    <a href="#Order" onClick={() => handlePageChange('Order')}>Orders</a>
                </li>
                <li className={`navLi col-3 ${currentPage==='Review' ? 'navActive' : ' '}`}>
                    <a href="#Review" onClick={() => handlePageChange('Review')}>Reviews</a>
                </li>
            </ul>
        
        </nav>
    </div>
    );
};

export default Sidebar;