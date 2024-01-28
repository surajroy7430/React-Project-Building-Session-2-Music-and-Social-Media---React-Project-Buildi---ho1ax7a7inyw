import React, { createContext, useContext, useState } from 'react';

const WarningDialogContext = createContext();

export const WarningDialogProvider = ({ children }) => {
    const [isWarningDialogOpen, setIsWarningDialogOpen] = useState(false);

    const openWarningDialog = () => {
        // console.log('dialog opened')
        setIsWarningDialogOpen(true);
    };

    const closeWarningDialog = () => {
        // console.log('dialog closed')
        setIsWarningDialogOpen(false);
    };

  return (
    <WarningDialogContext.Provider 
        value={{ isWarningDialogOpen, openWarningDialog, closeWarningDialog }}
    >
        {children}
    </WarningDialogContext.Provider>
  );
};

export const useWarningDialog = () => {
    return useContext(WarningDialogContext);
};
