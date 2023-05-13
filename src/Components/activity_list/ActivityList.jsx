import { ShowActivity } from "../../recoil/description_atoms/DescriptionAtoms";
import { useRecoilValue } from "recoil";
import style from "./ActivityList.module.css";

function ActivityList() {
  const detailsHide = useRecoilValue(ShowActivity);
  return (
    <>
      <div className={style.activityMain}>
        {detailsHide && (
          <div className={style.timeContainer}>
            <p>Added this card to To Do</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ActivityList;
