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

























// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation




// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation


// import React,{useState} from 'react'
// import { wallpaper } from '../recoil/description_atoms/DescriptionAtoms'
// import { useRecoilState } from 'recoil'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import style from './Customisation.module.css'
// import { useNavigate } from "react-router-dom";
// function Customisation() {
//     const navigate=useNavigate()
//     const[linkOfWallpaper,setLinkOfWallpaper]=useState('')
//     const [currentWallpaper,setCurrentWallpaper]=useRecoilState(wallpaper)
//     const image=['https://wallpaperaccess.com/full/4545909.jpg',
//                 'https://wallpapercave.com/wp/wp6940885.jpg',
//                   'https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg',
//               'https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w',
//             'https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg','https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg','https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp','https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg' ]

//                 function handleBackground(ele) {
//                     setCurrentWallpaper(ele)
//                     localStorage.setItem('userWallpaper',`${ele}`)
//                     navigate('/')
//                 }
//                 function handleLinkOfWallpaper(e){
//                   setLinkOfWallpaper(e.target.value)
//                 }
//                 function handleSendLinkOfWallpaper(){
//                   if(linkOfWallpaper!==''){
//                   setCurrentWallpaper(linkOfWallpaper)
//                   localStorage.setItem('userWallpaper',`${linkOfWallpaper}`)
//                   navigate('/')
//                 }
//               else{
//                 alert('select any background')
//               }}
//   return (
//     <div className={style.mainDiv}>
//         <div className={style.heading}>
//       <h1 >Choose Background</h1>

//         </div>
//         <div className={style.inpDiv}>
//         <TextField color='success'  onChange={handleLinkOfWallpaper} className={style.textField} label="Enter the link of your favourite background" variant="filled" />
//         <Button onClick={handleSendLinkOfWallpaper} variant="contained">Apply This Image</Button>
//         </div>
//         <div className={style.imageDiv}>

//         {image.map((ele,index)=><img className={style.perImg} key={index} onClick={()=>{handleBackground(ele)}} src={ele}/>)}
//         </div>
     
//     </div>
//   )
// }

// export default Customisation





































