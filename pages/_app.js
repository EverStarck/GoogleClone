import "../styles/globals.css";
import "normalize.css";

import ApiDataProvider from "../context/ApiDataContext";

function MyApp({ Component, pageProps }) {
  return (
    <ApiDataProvider>
      <Component {...pageProps} />
    </ApiDataProvider>
  );
}

export default MyApp;
