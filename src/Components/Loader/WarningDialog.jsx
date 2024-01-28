import { Close } from '@mui/icons-material';
import { Dialog, IconButton} from '@mui/material';
import React from 'react';
import './WarningDialog.css';
import { useWarningDialog } from './WarningDialogContext';

const WarningDialog = () => {
  const { isWarningDialogOpen, closeWarningDialog } = useWarningDialog();

  const handleDialogClose = () => {
    closeWarningDialog();
  };

  return (
    <Dialog
        fullScreen
        open={isWarningDialogOpen}
        onClose={handleDialogClose}
    >
      <div className="DialogContent">
        <div className="dialogCloseButtonLine">
          <IconButton
              edge="start"
              color="inherit"
              onClick={handleDialogClose}
              aria-label="close"
              className="dialogCloseButton"
          >
            <Close />
          </IconButton>
        </div>

        <div className="DialogBodyContent">
          <h1 id="dialogHeader">Try Amazon Prime Music </h1>
          <div>
            <p id="dialogBodyText">
              Ad-free music streaming included with Prime membership. Also includes free shipping and video streaming.
            </p>
          </div>
          <div className='DialogSignin'>
            <button 
              className='DialogSigninButton1'
            >
              Already a Customer? Sign In
            </button>
            <button 
              className='DialogSigninButton2'
            >
              Try Now
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default WarningDialog
