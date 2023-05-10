//Samad
import React, {useState} from 'react'
import styles from './AddList.module.css'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function AddList() {
    const[isVisible, setIsVisible] = useState(true)
  return (
      <div className={styles.container}>
          {isVisible?(<div className={styles.btnWrapper} onClick={()=>setIsVisible(false)}>
            <AddIcon/> <span> Add another list</span>
          </div>) : (
                  <div className={styles.inputWrapper}>
                      <input type="text" />
                      <div className={styles.innerDiv}>
                      <Button  variant='contained'>Add List</Button>
                      <CloseIcon onClick={()=>setIsVisible(true)}/>
                     </div>
                  </div>
          )}
    </div>
  )
}
