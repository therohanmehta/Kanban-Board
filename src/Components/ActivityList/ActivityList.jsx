import { ShowActivity } from "../../Recoil/DescriptionAtoms/DescriptionAtoms";
import { useRecoilValue } from "recoil";
import style from './ActivityList.module.css';

function ActivityList() {
    const detailsHide = useRecoilValue(ShowActivity);
    return (
        <>
            <div>
                {
                    detailsHide &&
                    <div className={style.timeContainer}>
                        <p>Added this card to To Do</p>
                    </div>
                }

            </div>
        </>
    )
}

export default ActivityList;