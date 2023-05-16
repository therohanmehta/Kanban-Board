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
              'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
            'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

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
<div className={style.introPage}>
<nav className={style.introNav}>

<div >
  <img className={style.introNavLogo}  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/kanban-board-4185955-3461987.png" alt="" />
  {/* <img className={style.introNavLogo}  src="https://e1.yotools.net/images/user_image/2023/05/64640d5cceab5.jpg" alt="" /> */}
<h1>KanBan.com</h1>
</div>

<div className={style.btnDiv}>
<Button variant='contained'>Features</Button>
<Button variant='contained'>Templates</Button>
<Button variant='contained'  >For Teams</Button>
<Button variant='contained'  >For Students</Button>
<Button variant='contained'  >Resources ❌</Button>
<Button variant='contained'  >Pricing</Button>
<Button color='success' variant='contained' >Start For Free</Button>

</div>
</nav>
<div className={style.centerText}>
    <h1 >Organize your Work and Life , finally</h1>
    <h2>BEcome focused , organized and calm with Todoist. The worlds #1 task manager and to-do list website   </h2>

</div>

</div>

<div className={style.features}>
  <div>
  <img  src="/home.png " alt="" />
  <div>
  <h1>The KanBan Board </h1>
  <h3> Here you can add Cards Task and also you can drag and  drop froom card to another card</h3>
  </div>

  </div>
</div>



  <div className={style.descDiv}>
    <div>
    <h1>The Description</h1>
<h3>Worry about the minor details or pinpoint to be added to the task here is the Description for you to add any details</h3>
    </div>

<img  src="/Desc.png " alt="" />
  </div>

  <div className={style.custShow}>
<img  src="/chooseBG.png " alt="" />
   <div>
   <h1>Customisation on the go</h1>
    <h3>Bored of all the old plain boring ToDo-List Websited and KanBan board </h3>
    <h3>We are here to give you the customisation that you want now you can make any background that you like just by pasting the link of the image </h3>
   </div>
     </div>








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