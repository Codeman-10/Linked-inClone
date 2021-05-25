import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@material-ui/core';

function HeaderOption({avatar,Icon,title,onClick}) {
    return (
        <div onClick={onClick} className="header_options">
            {Icon && <Icon className="header_options_icon"/>}
            {avatar && <Avatar className="header_options_icon" src={avatar} />}
            <h3 className="header_options_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
