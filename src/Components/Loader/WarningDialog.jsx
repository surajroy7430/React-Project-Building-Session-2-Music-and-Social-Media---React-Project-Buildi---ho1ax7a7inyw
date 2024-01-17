import { Close } from '@mui/icons-material';
import { Dialog, IconButton} from '@mui/material';
import React, { useState } from 'react'

const WarningDialog = ({ warningClose }) => {

  return (
    <Dialog
        fullScreen
        open={open}
        onClose={warningClose}
    >
        <IconButton
            edge="start"
            color="inherit"
            onClick={warningClose}
            aria-label="close"
        >
            <Close />
        </IconButton>
    </Dialog>
  )
}

export default WarningDialog
