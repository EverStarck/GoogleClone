import { createContext, useState } from "react";

export const ApiDataContext = createContext();

const ApiDataProvider = ({ children }) => {
  const [data, setData] = useState({
    gData: [],
    ready: false,
    loading: false,
  });

  return (
    <ApiDataContext.Provider value={{ data, setData }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataProvider;
