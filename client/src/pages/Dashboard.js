import React, {useState} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Shop  from '../components/Shop';

import Profile  from '../components/Profile';
import Review  from '../components/Review';
import Sidebar from '../components/SideBar';
import Cart from '../components/Cart';


const Dashboard = () => {

  const [currentPage, setCurrentPage] = useState('Shop');

  const renderPage = () => {
    if (currentPage === 'Shop') {
      return <Shop />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'Cart') {
      return <Cart />;
    }
    if (currentPage === 'Review') {
      return <Review />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <Header />
          <section className='dashboard'>
            <div className='col-2'>
              <Sidebar currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
            <div className='col-10'>
              {renderPage()}
            </div>
          </section>
      <Footer />
    </main>
  );
};

export default Dashboard;
