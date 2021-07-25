import { useState } from "react";
import { context } from "./context";

function ContextProvider({ children }) {
  const [translateVal, setTranslateVal] = useState("-927px");

  const value = {
    translateVal,
    setTranslateVal,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default ContextProvider;
