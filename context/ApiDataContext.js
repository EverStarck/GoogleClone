import { createContext, useState } from "react";

export const ApiDataContext = createContext();

const ApiDataProvider = ({ children }) => {
  const [data, setData] = useState({
    ytData: [],
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
