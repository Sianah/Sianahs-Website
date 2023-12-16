import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg";
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


const Navbar = () => {

  const[openMenu,setOpenMenu] = useState(false)
  const menuOption = [
    {
      text: "Home",
      icon: <HomeIcon/>
    },
    {
      text: "About",
      icon: <infoIcon/>
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon/>
    },
  ]
  return (
    <div>
    Navbar
    </div>
  )
}

export default Navbar
