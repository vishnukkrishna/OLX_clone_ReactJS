import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Components
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import CreatePage from "./Pages/CreatePage";
import ViewPostPage from "./Pages/ViewPostPage";
import { AuthContext, FirebaseContext } from "./store/Context";
import Post from "./store/PostContext";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route exact element={<HomePage />} path="/"></Route>
            <Route Component={SignupPage} path="/signup"></Route>
            <Route Component={LoginPage} path="/login"></Route>
            <Route Component={CreatePage} path="/create"></Route>
            <Route Component={ViewPostPage} path="/view"></Route>
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
