import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./Context/Context.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-wmiwt11lwzis08m0.us.auth0.com"
    clientId="V2nzLLPwNUype004Xy3YXtqCSfIUBPmA"
    authorizationParams={{redirect_uri: window.location.origin}}>
    <ContextProvider>
      <App />
    </ContextProvider>
    ,
  </Auth0Provider>
);
