import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AuthModalProvider } from "./context/AuthModalContext";
import { ModalProvider } from "./context/ModalContext";
import { UserProvider } from "./context/UserContext";
import { RootCommentProvider } from "./context/RootCommentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RootCommentProvider>
    <AuthModalProvider>
      <UserProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </UserProvider>
    </AuthModalProvider>
  </RootCommentProvider>
);
