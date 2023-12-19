import React, { useState } from 'react'
import SianahLogo from "../Assets/SianahLogo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import{
  List,
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";



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

      <Drawer open = {openMenu} onClose={() => setOpenMenu(false)}>
        <Box sx = {{width: 250}}
        role = "presentation"
        onClick = {() => setOpenMenu(false)}
        onKeyDown = {() => setOpenMenu(false)}
        >
          <List>
            {menuOption.map((item) => (
              <ListItem key = {item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  
                  <ListItemText primary = {item.text}/>

                </ListItemButton>
              </ListItem>
            )
            )}
          </List>

        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
