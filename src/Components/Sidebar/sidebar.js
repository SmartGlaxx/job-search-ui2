import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {Button, Divider} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './sidebar.css'
import { FaHome, FaPeopleArrows, FaRegClock, FaUserFriends, FaEnvelope, FaUserAlt, FaTh, FaBell, FaRocketchat, FaChevronCircleDown,
     FaWindowClose, FaTools, FaSignInAlt} from 'react-icons/fa' 
import { UseAppContext } from '../../Contexts/app-context'
import ListIcon from '@material-ui/icons/List';

//for popover starts
const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

  
  //for popover ends

const Sidebar =()=>{
     const {setLoggedIn, loggedIn, currentUserParsed, sidebarOpen, openSidebar} = UseAppContext()

const {_id, username, firstname, lastname} = currentUserParsed
     //popover function start
     const classes = useStyles();
     const [anchorEl, setAnchorEl] = React.useState(null);
   
     let firstnameCapitalized = '';
     let lastnameCapitalized = ''
     if(firstname){
         firstnameCapitalized = firstname.slice(0,1).toUpperCase().concat(firstname.slice(1).toLowerCase())
     }
 
     if(lastname){
         lastnameCapitalized = lastname.slice(0,1).toUpperCase().concat(lastname.slice(1).toLowerCase())
     }
     
    return <div className={ sidebarOpen ? `sidebarContainer2` : `sidebarContainer1`}  >
        <div className="sidebarTop " item xs ={9} sm={3}>
             <div className='sidebarlogo' onClick={openSidebar}>
                <Link to='/timeline' className='mainlogo-link'>SC</Link>
             </div>
            <FaWindowClose className='close-icon' size='25' onClick = {openSidebar}/>
        </div>
        <div className="sideTop" >
            <div className="sideTop-inner">
                <ul className="sideTop-ul">
                     <li className="sideTop-li" onClick={openSidebar}>
                    <Link to={`/userprofile/${_id}/${username}`} 
                    className= {window.location.href.indexOf("timeline") > -1 ? `sideTop-li-inner-active` :`sideTop-li-inner ` }>
                    <FaUserAlt className="icons"  size='15'/>
                        Profile 
                    </Link>
                    </li>
                    <li className="sideTop-li" onClick={openSidebar}>
                    <Link to='/timeline' 
                    className= {window.location.href.indexOf("timeline") > -1 ? `sideTop-li-inner-active` :`sideTop-li-inner ` }>
                    <FaHome className="icons"  size='15'/>
                    Home
                    </Link>
                    </li>
                    <li className="sideTop-li" onClick={openSidebar}>
                    <Link to={`/connections/${_id}/${username}`} 
                    className= {window.location.href.indexOf("connections") > -1 ? `sideTop-li-inner-active` :`sideTop-li-inner ` }>
                    <FaPeopleArrows className="icons"  size='15'/>
                    Connections
                    </Link>
                    </li>
                    <li className="sideTop-li" onClick={openSidebar}>
                    <Link to={`/follows/${_id}/${username}`} 
                    className= {window.location.href.indexOf("follows") > -1 ? `sideTop-li-inner-active` :`sideTop-li-inner ` }>
                    <FaUserFriends className="icons"  size='15'/>
                    Follows
                    </Link>
                    </li>
                    <li className="sideTop-li" onClick={openSidebar}>
                    <Link  to='/inbox' 
                     className= {window.location.href.indexOf("chat") > -1 ||
                     window.location.href.indexOf("inbox") > -1 || 
                     window.location.href.indexOf("composemessage") > -1 ?
                     `sideTop-li-inner-active` :`sideTop-li-inner ` }>
                    <FaEnvelope className="icons"  size='15'/>
                    Messages
                    </Link>
                    </li>
                </ul> 
            </div>
        </div>
        <div className="sideTop" >
            <div className="sideTop-inner">
                <ul className="sideTop-ul">
                    {/* <li className='sideTop-li'>
                        <FaUserAlt className="icons"  size='15'/>
                        Profile
                    </li> */}
                    <li className='sideTop-li'>
                        <FaTh  className="icons" size='15' />

                    </li>
                    <li className='sideTop-li'>
                        <FaRocketchat  className="icons" size='15'/>
                        Chat
                    </li>
                    <li className='sideTop-li'>
                        <FaBell  className="icons" size='15'/>
                        Notifications
                    </li>
                    <li className='sideTop-li'>
                        <FaTools  className="icons" size='15'/>
                        Settings
                    </li>
                    {loggedIn && <><Button className='logout' style={{color: "rgb(236, 39, 39)"}}><FaSignInAlt onClick={()=>setLoggedIn(false)} className='logout-icon' size='15'/>Log out</Button></>}
                </ul>
            </div>
        </div> 
        
    </div>
}

export default Sidebar
