import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

interface SnackBarCompProps {
  message: string
  isError: boolean
  handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void
}

export const SnackBarComp: React.FC<SnackBarCompProps> = ({ message, isError, handleClose }) => {

  return (
    <div>
      <Snackbar
        open={isError}
        onClose={handleClose}
        autoHideDuration={4000}
      >
        <Alert severity="error">{message}</Alert>
      </Snackbar>
    </div>
  );
}