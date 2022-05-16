import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/completedform.css";
import "../styles/navbar.css";
import "../styles/header.css";
import "../styles/howto.css";
import "../styles/footer.css";
import "../styles/create.css";
import "../styles/homepage.css";
import "../styles/userdefinedfields.css";

import Footer from "../components/Footer";

// pages/_app.js
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Navbar />

      <Component {...pageProps} />
    </SessionProvider>
  );
}
