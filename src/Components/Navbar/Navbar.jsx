import Button from '@mui/material/Button';
import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PublicIcon from '@mui/icons-material/Public';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import style from './Navbar.module.css'
function Navbar() {
const [showStar,setShowStar]=useState(true)

  return (
    <>

      <nav className={style.navBar}>
     <div className={style.left}>
     <Button sx={{color:'white'}} variant='text'>Task Management</Button>
     {showStar?<Button sx={{color:'white'}} onClick={()=>{setShowStar(!showStar)}}><StarBorderIcon/></Button>:<Button sx={{color:'white'}} onClick={()=>{setShowStar(!showStar)}}><StarIcon/></Button>}
     <Button sx={{color:'white'}} variant='text' startIcon={<PublicIcon />}>Public</Button>  
      <Button sx={{color:'white'}} variant='text'>Workspace Visible</Button>
      <Button sx={{color:'white'}} variant='contained' startIcon={<ViewKanbanOutlinedIcon />}>Board</Button>
      <Button sx={{color:'white'}} variant='text'><KeyboardArrowDownOutlinedIcon/></Button>
     </div>
     
     <div className={style.right}>
     <Button sx={{color:'white'}} variant='text' startIcon={<RocketLaunchOutlinedIcon />}>Power-ups</Button>
      <Button sx={{color:'white'}} variant='text'  startIcon={<BoltIcon />}>Automation</Button>
      <Button sx={{color:'white'}} variant='text' startIcon={<FilterListIcon />}>Filter</Button>
      <Button sx={{color:'white'}} variant='text'>Share</Button>
     </div>
        </nav>    
    
    </>
  )
}

export default Navbar
