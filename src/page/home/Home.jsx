import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import Header from '../../component/header/Header';
import Post from '../../component/post/post';
import Sidebar from '../../component/sidebar/Sidebar';
import PostPage from '../SinglePost/PostPage';
import './home.scss';
import React from 'react'


const Home = () => {
  return (
    <>
      <Header />
      <div className='homepage'>
        <div className="posts">
          <Link to='/post'>
          <Post />
          </Link>
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default Home