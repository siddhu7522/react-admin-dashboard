import React from 'react'
import "./User.css"
import {Link} from "react-router-dom"
import {LocationSearching,CalendarToday,Publish, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons"
function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>

                </Link>
                
            </div>
            <div className="userContainer">
            
                <div className="userShow">
                    <div className="userShowTop">
                        <img className="userShowImg" src="https://lh3.googleusercontent.com/ogw/ADea4I4EIVClkJKXZ0_rCjELyuVfohSuZi-im234sE85=s64-c-mo"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Siddhartha reddy</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Siddhartha reddy</span>

                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">21/03/2001</span>

                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">6303467339</span>

                        </div>
                        <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">siddhureddy7522@gmail.com</span>

                        </div>
                        <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Andhra | India</span>

                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTite">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text"placeholder="Siddhartha reddy"className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Date of birth</label>
                            <input type="text"placeholder="21/03/2001"className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text"placeholder="Siddhartha reddy"className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text"placeholder="siddhureddy7522@gmail.com"className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text"placeholder="6303467339"className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text"placeholder="Andhra | India"className="userUpdateInput"/>
                        </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
        
                                <img className="userUpdateImg"src="https://lh3.googleusercontent.com/ogw/ADea4I4EIVClkJKXZ0_rCjELyuVfohSuZi-im234sE85=s64-c-mo"/>
                                <label htmlFor="file"> </label>
                                    <Publish className="userUpdateIcon"/>
                                    <input type="file"id="file"style={{display:"none"}}/>
                               
                            </div>
                            <button className="userUpdateButton">Update</button>

                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
