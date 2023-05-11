import {useState} from 'react';
import SubjectIcon from '@mui/icons-material/Subject';
import InfoIcon from '@mui/icons-material/Info';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import style from './DescriptionEdit.module.css';

function DescriptionEdit() {
    const [description, setDescription] = useState('');
    const [edit, setEdit] = useState(false);

    function handleDescription(e) {
        setDescription(e.target.value)
    }

    return (
        <div className={style.descriptionContainer}>
            <div className={style.description}>
                <div>
                    <SubjectIcon />
                </div>
                <div className={style.descriptionText}>
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
        </div>
    )
}

export default DescriptionEdit;