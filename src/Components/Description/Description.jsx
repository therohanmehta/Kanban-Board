import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

import ActivityList from "../ActivityList/ActivityList";
import DescriptionActivity from "../DescriptionActivity/DescriptionActivity";
import DescriptionComments from "../DescriptionComments/DescriptionComments";
import DescriptionEdit from "../DescriptionEdit/DescriptionEdit";
import DescriptionTitle from "../DescriptionTitle/DescriptionTitle";
import { showDialog } from "../../Recoil/DescriptionAtoms/DescriptionAtoms";
import style from "./Description.module.css";

import { Open } from "../../Recoil/DescriptionAtoms/DescriptionAtoms";
import { useRecoilState, useRecoilValue } from "recoil";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
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
            position: "absolute",
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

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [openValue, setOpenValue] = useRecoilState(showDialog);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenValue(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "90vw" }} className={style.stackContainer}>
      <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button> */}

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openValue}
        >
          <div className={style.descriptionContainer}>
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              <DescriptionTitle />
            </BootstrapDialogTitle>

            <DialogContent>
              <DescriptionEdit />
              <DescriptionActivity />
              <DescriptionComments />
              <ActivityList />
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
