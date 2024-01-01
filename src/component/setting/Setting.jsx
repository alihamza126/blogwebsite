import React, { useState } from 'react'
import './setting.scss'

const Setting = () => {
    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    return (
        <div className="setting">
            <form action="">
                <div className="profile-image">
                    <img alt="?" src={image} />
                    <label htmlFor="img"><i class="fa-solid fa-image"></i></label>
                    <input type="file" onChange={onImageChange} id="img" hidden />
                </div>
                <div className="setting-data">
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="setting-data">
                    <label htmlFor="email">Email </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="setting-data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                    <input type='submit' value="Update"/>
            </form>
        </div>
    )
}

export default Setting