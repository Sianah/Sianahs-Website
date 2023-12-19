import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg";
import SianahLogo from "../Assets/SianahLogo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import{
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import { pink } from '@mui/material/colors';


const Navbar = () => {

  const[openMenu,setOpenMenu] = useState(false)
  const menuOption = [
    {
      text: "Home",
      icon: <HomeIcon/>
    },
    {
      text: "About",
      icon: <InfoIcon/>
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon/>
    },
  ]
  return (
    <nav>
      <div className="navbar-logo-container">
        <img src={SianahLogo} 
        style = {{width:250, height:250, position: 'absolute', top: -80}}alt="" />
      </div>

      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <button className="primary-button">
          Contact
        </button>
      </div>

      <div className="navbar-menu-container">
      <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
      </div>
    </nav>
  )
}

export default Navbar
