import React from 'react';
import './singlepost.scss';
import Single from '../../component/single/Single';
import Sidebar from '../../component/sidebar/Sidebar';
import { Link } from 'react-router-dom';

const PostPage = () => {
  return (
    <div className="post-page">
      <div className="content">
        <Single />
      </div>
      <Sidebar />
    </div>
  )
}

export default PostPage