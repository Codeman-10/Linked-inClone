import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, login } from './userReducer';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from './userReducer'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Header() {
    const user = useSelector(selectUser)
    var fuser = auth.currentUser;
    const dispatch = useDispatch();
    const changeProfilePic = () => {
        var photoUrl = prompt("Please enter your photo url", "");
        if (photoUrl) {
            auth.currentUser.updateProfile({
                photoURL: photoUrl
            }).then
                (() => {
                    dispatch(login({
                        email: fuser.email,
                        uid: fuser.uid,
                        displayName: fuser.displayName,
                        photoURL: fuser.photoURL
                    }))
                })
        }
    }
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();

    }
    return (
        <div className="header">

            <div className="header_left">

                <img src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1621474982~hmac=64006df92f25e3307972b2e79dc619a8" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={PeopleIcon} title="My Network" />
                <HeaderOption Icon={WorkIcon} title="Jobs" />
                <HeaderOption Icon={MessageIcon} title="Messages" />
                <HeaderOption Icon={NotificationsIcon} title="My Notifications" />
                {user && <div style={{ display: "flex" }}> <HeaderOption onClick={() => { changeProfilePic() }} avatar={user.photoURL} title="Me" />
                    <HeaderOption onClick={() => { logoutOfApp() }} Icon={ExitToAppIcon} title="Sign Out" /></div>}

            </div>
        </div>
    )
}

export default Header
