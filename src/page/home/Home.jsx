import Post from '../../component/post/post';
import Sidebar from '../../component/sidebar/Sidebar';
import PostPage from '../SinglePost/PostPage';
import './home.scss';
import React from 'react'


const Home = () => {
  return (
   <>
     <div className='homepage'>
       <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            
       </div>
        <Sidebar/>
    </div>
    {/* <PostPage/> */}
    
   </>
  )
}

export default Home