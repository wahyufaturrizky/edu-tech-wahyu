import { AnimateSharedLayout } from "framer-motion";
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => (
  <AnimateSharedLayout>
    <Component {...pageProps} />
  </AnimateSharedLayout>
);

export default App;
