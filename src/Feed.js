import React, { useState, useEffect } from 'react'
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './Firebase';
import firebase from 'firebase';
import {  useSelector } from 'react-redux';
import { selectUser } from './userReducer'
import FlipMove from 'react-flip-move';
function Feed() {
    const [Posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const PhotoUrl=useSelector(selectUser).photoURL
    const displayName=useSelector(selectUser).displayName

    useEffect(() => {
        db.collection('posts').orderBy('Timestamp','desc')
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        );
    }, []);


    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            Name: displayName,
            Description: "User",
            Message: input,
            Photourl: PhotoUrl,
            Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }
    return (
        <div className="feed">
            <div className="feedinput_container">
                <div className="feedinput">
                    <CreateIcon />
                    <form>
                        <input type="text" name="" id="" value={input} onChange={(e) => { setInput(e.target.value) }} />
                        <button onClick={sendPost} type="submit">send</button>
                    </form>
                </div>
                <div className="feed_input_options">
                    <InputOption
                        Icon={ImageIcon}
                        title={"Photo"}
                        color={"#70B5F9"}
                    />
                    <InputOption
                        Icon={SubscriptionsIcon}
                        title={"Video"}
                        color={"#E7A33E"}
                    />
                    <InputOption
                        Icon={EventNoteIcon}
                        title={"Event"}
                        color={"#C0CBCD"}
                    />
                    <InputOption
                        Icon={CalendarViewDayIcon}
                        title={"Write Article"}
                        color={"#7FC15E"}
                    />
                </div>
            </div>
            <FlipMove>
            {Posts.map(({ id, data: { Description, Name, Message, Photourl }
            }) => (
                <Post
                key={id}
                Description={Description}
                Name={Name}
                Message={Message}
                Photourl={Photourl}
                />
            ))}
      </FlipMove>
        </div>
    )
}

export default Feed
