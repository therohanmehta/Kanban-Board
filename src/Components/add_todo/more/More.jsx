import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MoreHorizOutlined from '@mui/icons-material/MoreHorizOutlined';

export default function MorePopOver(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button onClick={handleClick}>
        <MoreHorizOutlined fontSize="small" color="disabled"/>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
              <Typography sx={{ p: 2 }}><button
                  onClick={props.func}
              >
                  ❌</button></Typography>
      </Popover>
    </div>
  );
}