import React,{useState} from 'react'
import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
import { useRecoilState } from 'recoil'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './Customisation.module.css'
import { useNavigate } from "react-router-dom";
function Customisation() {
    const navigate=useNavigate()
    const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
    const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
    const image=['https://wallpaperaccess.com/full/4545909.jpg',
                'https://wallpapercave.com/wp/wp6940885.jpg',
                  'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
              'https://wallpapercave.com/wp/wp2803669.jpg',
            'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Free-download-Meme-Wallpaper-HD.png','https://socialstuffy.com/upload/wallpaper/ship-painting-hd-4k-wallpaper-free-for-desktop-and-laptop-background-6492023021013322924.jpg' ]

                function handleBackground(ele) {
                    setCurrentWallpaper(ele)
                    localStorage.setItem('userWallpaper',`${ele}`)
                    navigate('/')
                }
                function handleLinkOfWallpaper(e){
                  setLinkOfWallpaper(e.target.value)
                }
                function handleSendLinkOfWallpaper(){
                  if(linkOfWallpaper!==''){
                  setCurrentWallpaper(linkOfWallpaper)
                  localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
                  navigate('/')
                }
              else{
                alert('select any background')
              }}
  return (
    <div className={style.mainDiv}>
        <div className={style.heading}>
      <h1 >Choose Background</h1>

        </div>
        <div className={style.inpDiv}>
        <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
        <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
        </div>
        <div className={style.imageDiv}>

        {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
        </div>
     
    </div>
  )
}

export default Customisation
