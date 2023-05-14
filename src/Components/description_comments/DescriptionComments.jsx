

import { useState } from 'react';
import style from './DescriptionComments.module.css';
import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { getData } from '../../utils/Services';
// import { atomListUid,list} from "../../recoil/description_atoms/DescriptionAtoms";
import {
    atomCardName,
    list,
    uidOfListItem,
    atomListUid,
} from "../../recoil/description_atoms/DescriptionAtoms";

function DescriptionComments() {
    const [showComment, setShowComment] = useState(false);
    const [commentText, setCommentText] = useState('');
    // const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')) || []);
    // const [comments, setComments] = useState([]);
    const tempList = getData();

    const [currentListUid, setCurrentListUid] = useRecoilState(atomListUid);
    const [listData, setListData] = useRecoilState(list);
    const [uidOfList, setUidOfList] = useRecoilState(uidOfListItem);

    const commentsListIndex = tempList.findIndex(
        (ele) => ele.ListId === currentListUid
    );
    const CommentsCardIndex = tempList[commentsListIndex].tasks.findIndex(
        (ele) => ele.cardItemId === uidOfList
    );
    // tempList[commentsListIndex].tasks[CommentsCardIndex].comments;
    const currentComment = tempList[commentsListIndex].tasks[CommentsCardIndex].comments;
    console.log(tempList[commentsListIndex].tasks[CommentsCardIndex].comments);
    const [comments, setComments] = useState(currentComment || []);


    // const [comments, setComments] = useState(tempList[listIndex].tasks[cardIndex].comments || []);





    function handleComments(e) {
        e.preventDefault();
        if (commentText.trim() === '') {
            return;
        }
        let updatedComments = [...comments, commentText];
        setComments(updatedComments);
        console.log(commentText);
        console.log(comments);
        //need to store it inside listData key.
        // localStorage.setItem('comments', JSON.stringify(updatedComments))


        const listIndex = tempList.findIndex(
            (ele) => ele.ListId === currentListUid
        );
        const cardIndex = tempList[listIndex].tasks.findIndex(
            (ele) => ele.cardItemId === uidOfList
        );
        tempList[listIndex].tasks[cardIndex].comments = updatedComments;
        localStorage.setItem("listData", JSON.stringify(tempList));
        setListData(tempList);
        console.log(tempList);

        setCommentText('')
    }

    function handleDelete(i) {
        let removeItems = comments.filter((element, index) => {
            return index !== i;
        })
        setComments(removeItems);
        // localStorage.setItem('comments', JSON.stringify(removeItems));
        //    currentComment.comments
        // console.log(tempList, "delete");

        const listIndex = tempList.findIndex(
            (ele) => ele.ListId === currentListUid
        );
        const cardIndex = tempList[listIndex].tasks.findIndex(
            (ele) => ele.cardItemId === uidOfList
        );
        tempList[listIndex].tasks[cardIndex].comments = removeItems;
        localStorage.setItem("listData", JSON.stringify(tempList));


        console.log(tempList);

    }



    return (
        <>
            <div className={style.commentContainer}>
                {
                    showComment ?
                        <div className={style.commentTexts}>
                            <div className={style.comment}>
                                <input type='text' placeholder='Write a comment' value={commentText} onChange={(e) => setCommentText(e.target.value)} className={style.comments} />
                            </div>
                            <div>
                                <Button variant='contained' sx={{ width: '18%', ml: 5 }} onClick={handleComments}>Save</Button>
                            </div>
                        </div>
                        :
                        <div className={style.comment}>
                            <input type='text' placeholder='Write a comment...' onClick={() => setShowComment(!showComment)} className={style.comments} />
                        </div>
                }

                {
                    comments.map((comment, index) => (
                        comment.trim() !== '' && <>
                            <div key={index} className={style.eachComment}>
                                {comment}
                            </div>
                            <div className={style.updateComment}>

                                <small onClick={() => handleDelete(index)} className={style.modifyComment}>Delete</small>
                            </div>
                        </>
                    ))
                }


            </div>
        </>
    )
}

export default DescriptionComments;