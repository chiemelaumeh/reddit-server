import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AuthModalProvider } from "./context/AuthModalContext";
import { ModalProvider } from "./context/ModalContext";
import { UserProvider } from "./context/UserContext";
import { RerenderContextProvider } from "./context/RerenderContext";
import { RedirectContextProvider } from "./context/RedirectContext";
import { CommunityContextProvider } from "./context/CommunityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CommunityContextProvider>
    <RedirectContextProvider>
      <RerenderContextProvider>
        <AuthModalProvider>
          <UserProvider>
            <ModalProvider>
              <App  />
            </ModalProvider>
          </UserProvider>
        </AuthModalProvider>
      </RerenderContextProvider>
    </RedirectContextProvider>
  </CommunityContextProvider>
);
