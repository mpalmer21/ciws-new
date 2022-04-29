import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../stores/authContext";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/header.css";
import "../styles/howto.css";
import "../styles/footer.css";
import "../styles/create.css";
import "../styles/homepage.css";
import "../styles/userdefinedfields.css";

import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
