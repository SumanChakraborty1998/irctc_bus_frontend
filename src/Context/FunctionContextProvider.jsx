import React, { useState } from "react";
const FunctionContext = React.createContext();

FunctionContext.displayName = "Function_Context";
const FunctionContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  const value = { open, handleOpen, handleClose}; 
  return (
    <FunctionContext.Provider value={value}> {children} </FunctionContext.Provider>
  );
};
export { FunctionContext, FunctionContextProvider };
