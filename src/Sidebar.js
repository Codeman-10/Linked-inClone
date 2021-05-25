import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import {  useSelector } from 'react-redux';
import { selectUser } from './userReducer'


function Sidebar() {
    const PhotoUrl=useSelector(selectUser).photoURL
    const displayName=useSelector(selectUser).displayName
    const email=useSelector(selectUser).email

    console.log(PhotoUrl)
    const recentItem = (topic) => {
        return (<div className="sidebar_recentitem">
            <span className="sidebar_hash">
                #
            </span>
            <p>{topic}</p>
        </div>)
    }
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://pbs.twimg.com/media/ER0AQagU8AAUjHM.jpg" alt="" />
                <Avatar className="sidebar_avatar" src={PhotoUrl} />
                <h2>{displayName}</h2>
                <h4>{email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_Stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statnumber">3,546</p>
                </div>
                <div className="sidebar_Stat">
                    <p>Views onpost</p>
                    <p className="sidebar_statnumber">3,44346</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("ReactJs")}
                {recentItem("Programming")}                 {recentItem("software")}
                {recentItem("webdevelopment")}
                {recentItem("design")}

            </div>
        </div>
    )
}

export default Sidebar
