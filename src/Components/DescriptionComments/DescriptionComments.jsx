import {useState} from 'react';
import style from './DescriptionComments.module.css';
import Button from '@mui/material/Button';

function DescriptionComments() {
    const [showComment, setShowComment] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')) || []);

    function handleComments(e) {
        e.preventDefault();
        if (commentText.trim() === '') {
            return; // Do not save empty comments
          }
        let updatedComments = [...comments, commentText];
        setComments(updatedComments);
        console.log(commentText);
        console.log(comments);
        localStorage.setItem('comments', JSON.stringify(updatedComments))
        setCommentText('')
    }

    function handleDelete(i) {
        let removeItems = comments.filter((element, index) => {
            return index !== i;
        })
        setComments(removeItems);
        localStorage.setItem('comments',JSON.stringify(removeItems));

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
                {/* <div className={style.commentList}> */}
                {
                    comments.map((comment, index) => (
                        comment.trim() !== '' &&  <>
                            <div key={index} className={style.eachComment}>
                                {comment}
                            </div>
                            <div className={style.updateComment}>
                                <small>Edit</small>
                                <small onClick={() => handleDelete(index)}>Delete</small>
                            </div>
                        </>
                    ))
                }
                {/* </div> */}

            </div>
        </>
    )
}

export default DescriptionComments;