


import { ShowActivity } from "../../recoil/description_atoms/DescriptionAtoms";
import { useRecoilValue } from "recoil";
import style from './ActivityList.module.css';
import { getData } from "../../utils/Services";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { atomCardName, list, uidOfListItem, atomListUid } from "../../recoil/description_atoms/DescriptionAtoms";
// import { atomListUid } from "../../recoil/description_atoms/DescriptionAtoms";
import PersonIcon from '@mui/icons-material/Person';
import Moment from 'react-moment';



function ActivityList() {
    const detailsHide = useRecoilValue(ShowActivity);

    const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem)  //current list uid
    const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);  //current task uid
    // const currentListUid=useRecoilValue(atomListUid);
    const [todoAction, setTodoAction] = useState('');
    const [tempData, setTempData] = useState(list);

    let listData = getData();

    // const activityIndex=listData.findIndex((item,index) => item.ListId === uidOfList);
    // console.log(activityIndex);
    const listIndex = listData.findIndex(
        (ele) => ele.ListId === currentListUid
    );
    const cardIndex = listData[listIndex].tasks.findIndex(
        (ele) => ele.cardItemId === uidOfList
    );


   

    const [time, setTime] = useState(listData[listIndex].tasks[cardIndex].activity[0]);
    const activityTime = listData[listIndex].tasks[cardIndex].activity;
   

    // const timestamp = new Date().toLocaleString();

    localStorage.setItem("listData", JSON.stringify(listData));
   


    useEffect(() => {

        const listIndex = listData.findIndex((item) => item.ListId === currentListUid);
        if (listIndex !== -1) {
            const nameOfList = listData[listIndex].nameOfList;
            setTodoAction(nameOfList);
            console.log(nameOfList);

        }

        setTime(activityTime );
        setTempData(listData);

    }, [])


    return (
        <>
            <div className={style.activityMain}>
                {
                    detailsHide &&
                    <div className={style.timeContainer}>
                        <PersonIcon />
                        <div className={style.activity}>
                            <span  >Added this card to {todoAction} </span>
                            {/* <small className={style.timeStamp}></small> */}
                                {time.map((ele) => (
                                    <div>
                                        <small>{ele}</small><br />
                                        </div>
                           ))}
                            {/* {time} */}
                            
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default ActivityList;







