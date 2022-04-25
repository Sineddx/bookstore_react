import React from "react";

const ReducerContext = React.createContext({
  state: {},
  dispatch: () => {},
});

ReducerContext.displayName = "NewReducer";

export default ReducerContext;
