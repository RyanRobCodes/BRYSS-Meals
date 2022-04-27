import React, {useState} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home  from '../components/Home';
import Shop  from '../components/Shop';
import Order  from '../components/Order';
import Profile  from '../components/Profile';
import Review  from '../components/Review';
import Sidebar from '../components/SideBar'

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';



const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Shop') {
      return <Shop />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'Order') {
      return <Order />;
    }
    if (currentPage === 'Review') {
      return <Review />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  // const thoughts = data?.thoughts || [];

  // const loggedIn = Auth.loggedIn();

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
