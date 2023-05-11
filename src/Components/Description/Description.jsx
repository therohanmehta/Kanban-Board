import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import SubjectIcon from '@mui/icons-material/Subject';
import InfoIcon from '@mui/icons-material/Info';
import TocIcon from '@mui/icons-material/Toc';
import TextField from '@mui/material/TextField';
import style from './Description.module.css';

// import { Box } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));



function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = useState(false);
    const [description, setDescription] = useState('');
    const [watch, setWatch] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem('comments')) || []);
    const [detailsHide, setDetailsHide] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    function handleDescription(e) {
        setDescription(e.target.value)
    }

    function handleComments(e) {
        e.preventDefault();
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
        <Stack spacing={2} sx={{width:'90vw'}} className={style.stackContainer}>
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <div className={style.descriptionContainer}>
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        <div className={style.titleContainer}>
                            <div className={style.titleIcon}>
                                {/* <DvrOutlinedIcon className={`${style.icon} ${style.iconLarge}`} /> */}
                                <DvrOutlinedIcon className={style.icon} style={{ fontSize: '28px' }} />
                            </div>
                            <div className={style.titleName}>
                                <p >Todo Title</p>

                                <div className={style.listName}>
                                    <small>in list To Do </small>
                                    {
                                        watch && <div><VisibilityOutlinedIcon style={{ fontSize: '16px' }} /></div>
                                    }
                                </div>

                                {/* Notifications */}
                                <div className={style.contentContainer}>
                                    <div className={style.notificationContainer}>
                                        <small>Notifications</small>
                                        <div >
                                            {
                                                watch ? (
                                                    <div className={style.watching} onClick={() => setWatch(!watch)}>
                                                        <div><VisibilityOutlinedIcon style={{ fontSize: '16px' }} /></div>
                                                        <small>Watching</small>
                                                        <div><CheckOutlinedIcon className={style.check} style={{ fontSize: '16px' }} /></div>
                                                    </div>

                                                ) : (
                                                    <div className={style.watch} onClick={() => setWatch(!watch)}>
                                                        <div><VisibilityOutlinedIcon style={{ fontSize: '16px' }} /></div>
                                                        <small>Watch</small>
                                                    </div>
                                                )
                                            }

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </BootstrapDialogTitle>
                    <DialogContent >
                        {/* description section */}
                        <div className={style.description}>
                            <div>
                                <SubjectIcon />
                            </div>
                            <div>
                                Description
                            </div>
                            {
                                edit ? <InfoIcon /> : <p className={style.edit} onClick={() => setEdit(!edit)}>Edit</p>
                            }

                        </div>

                        <div className={style.inputContainer}>
                            <Stack spacing={1} >
                                {edit && <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={4}
                                    onChange={handleDescription}
                                    value={description}
                                />}
                                {edit && <Button variant="contained" sx={{ width: '20%' }} onClick={() => setEdit(!edit)}>Save</Button>}
                            </Stack>
                        </div>
                        <div className={style.descriptionContent}>
                            {edit ? "" : description}
                        </div>

                        {/* Avtivity section */}
                        <div className={style.activityContainer}>
                            <div className={style.activityLeft}>
                                <div className={style.activityIcon}>
                                    <TocIcon />
                                </div>
                                <div className={style.activityText}>
                                    <p>Activity</p>
                                </div>
                            </div>
                            <div className={style.hideDetails} onClick={() => setDetailsHide(!detailsHide)}>
                                <small>Hide Details</small>
                            </div>

                        </div>

                        {/* Comment section */}
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
                                    <>
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

                        {/* Time duration of addition of card */}
                        <div>
                            {
                                detailsHide &&
                                <div className={style.timeContainer}>
                                    <p>Added this card to To Do</p>
                                </div>
                            }

                        </div>

                    </DialogContent>
                    <DialogActions>
                        {/* <Button autoFocus onClick={handleClose}>
                            Save changes
                        </Button> */}
                    </DialogActions>
                </div>
            </BootstrapDialog>

        </div>
        </Stack>
    );
}
