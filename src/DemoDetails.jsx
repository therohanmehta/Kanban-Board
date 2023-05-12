import { useParams } from 'react-router-dom';
import { atomListUid, uidOfListItem } from './Recoil/DescriptionAtoms/DescriptionAtoms';
import { useRecoilValue } from "recoil";
import CustomizedDialogs from './Components/Description/Description';

export default function DemoDetails() {
    let atomListUidFromRecoil=useRecoilValue(atomListUid)
    let atomCardUidFromRecoil=useRecoilValue(uidOfListItem)
    atomListUidFromRecoil = useParams();



  return (
    <div>
     <CustomizedDialogs/>

    </div>
  );
}
