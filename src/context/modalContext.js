import React from "react";

const ModalContext = React.createContext({
  open: false,
  OPEN_MODAL: () => {},
  CLOSE_MODAL: () => {},
});

ModalContext.displayName = "CartContext";

export default ModalContext;
