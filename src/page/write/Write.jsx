import React from 'react'
import './write.scss';

const Write = () => {
    return (
        <div className="write">
            <div className="write-container">
                <div className="img">
                    <img src="https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg" alt="" />
                </div>
                <div className="write-intro">
                    <form action="" className='post-form'>
                        <div className="left">
                            <div className="post-title">
                                <div className="input-img">
                                    <label htmlFor="file" ><i class="fa-solid fa-circle-plus"></i></label>
                                    <input type="file" name='file' id='file' style={{ display: 'none' }} />
                                </div>
                                <div className="input-title">
                                    <input type="text" name="title" id="title" placeholder='Title for the blog .....'/>
                                </div>
                            </div>
                            <div className="content">
                                <textarea name="text" placeholder="Write you'r Blog post here" id="text" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="right">
                            <input type="submit" value='Publish' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Write