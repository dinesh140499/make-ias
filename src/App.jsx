import "./App.css";
import { Toaster } from 'react-hot-toast';
import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import ScrollToTop from "./reusable/ScrollToTop";
import { useEffect } from "react";
import { setNavigator } from './utlis/navigate';
import { useNavigate } from "react-router-dom";


const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);
  return useRoutes(routes);
};


window.addEventListener('scroll', window.scrollTo(0, 0))

const App = () => {
  return (<Router>
    <ScrollToTop />
    <AppRoutes />
    <Toaster />
  </Router>)

};

export default App;
