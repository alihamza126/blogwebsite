import React from 'react'
import Setting from '../../component/setting/setting'
import Sidebar from '../../component/sidebar/Sidebar'
import './settingpage.scss'

const SettingPage = () => {
  return (
    <div className="settingpage">
            <Setting/>
            <Sidebar/>
    </div>
  )
}

export default SettingPage