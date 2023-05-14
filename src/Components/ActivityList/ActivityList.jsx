

import { ShowActivity } from "../../Recoil/DescriptionAtoms/DescriptionAtoms";
import { useRecoilValue } from "recoil";
import style from './ActivityList.module.css';
import { getData } from "../../utils/Services";
import { useRecoilState } from "recoil";
import { useState,useEffect } from "react";
import { atomCardName, list, uidOfListItem, atomListUid } from "../../Recoil/DescriptionAtoms/DescriptionAtoms";
import PersonIcon from '@mui/icons-material/Person';
import moment from 'moment';
moment().format();


function ActivityList() {
    const detailsHide = useRecoilValue(ShowActivity);

    const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem)
    const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
    const [todoAction,setTodoAction]=useState('');
   

    let listData = getData();
    useEffect(()=> {
        const listIndex = listData.findIndex((item) => item.ListId === currentListUid);
        if (listIndex !== -1) {
          const nameOfList = listData[listIndex].nameOfList;
          setTodoAction(nameOfList);
          console.log(nameOfList);
          
        }

    },[])
   



   
    return (
        <>
            <div className={style.activityMain}>
                {
                    detailsHide &&
                    <div className={style.timeContainer}>
                        <PersonIcon/>
                        <div className={style.activity}>
                        <small >Added this card to {todoAction} </small>
                        <small className={style.timeStamp}>{moment().startOf('hour').fromNow()}</small>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default ActivityList;