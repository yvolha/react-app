import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "../Store/Store";
import NotFound from "../../pages/404Page";
import { Home } from "../../pages/HomePage";
import { AboutUs } from "../../pages/AboutPage";
import { Header } from "../Header/Header";
import { FormPage } from "../../pages/FormPage";
import { useEffect, useState } from "react";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <Provider store={store}>
        <App />
      </Provider>
    )
  );
}
