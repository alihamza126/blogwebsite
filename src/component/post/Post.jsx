import './post.scss'
import React from 'react'

const Post = () => {
  return (
    <div className="post-container">
      <div className="post">
        <div className="post-img">
          <img  src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="" />
        </div>
        <div className="post-cat">
          <ul>
            <li>Education</li>
            <li>Life style</li>
          </ul>
        </div>
        <div className="post-title">
              <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, incidunt earum.</a>
        </div>
        <div className="post-created-date">
          <p>1 hour ago</p>
        </div>
      </div>
    </div>
  )
}

export default Post