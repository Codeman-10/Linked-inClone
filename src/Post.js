import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { forwardRef } from 'react';
import InputOption from './InputOption';
import './Post.css';

const Post=forwardRef(({Name,Photourl,Message,Description}, ref)=> {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={Photourl} />
                <div className="post_info">
                    <h2>{Name}</h2>
                    <p>{Description}</p>
                </div>
                
            </div>
            <div className="post_body">
                <p>{Message}</p>
            </div>
            <div className="post_buttons">
                <InputOption
                Icon={ThumbUpAltOutlined}
                title={"Like"}
                color={"gray"}
                 />
                   <InputOption
                Icon={ChatOutlined}
                title={"Chat"}
                color={"gray"}
                 />
                   <InputOption
                Icon={ShareOutlined}
                title={"Share"}
                color={"gray"}
                 />
                   <InputOption
                Icon={SendOutlined}
                title={"Send"}
                color={"gray"}
                 />
            </div>
            
        </div>
    )
})

export default Post
