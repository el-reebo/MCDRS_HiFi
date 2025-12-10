//Make sure to run npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// --- User Pages ---
import HeaderBar from "./components/HeaderBar";
import Nav_user from "./components/Nav_user";
import Login from "./pages/Login";
import Home_user from "./pages/Home_user";
import Notifs from "./pages/Notifs";
import Network from "./pages/Network";
// --- Admin Pages ---
import Nav_admin from "./components/Nav_admin";
import Home_admin from "./pages/Home_admin";
import Messages from "./pages/Messages";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <HeaderBar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      {isAdmin ? <Nav_admin /> : <Nav_user />}
      <Routes>
        <Route path="/" element={<Home_user />} />
        {/* onLogon set so if called will always set IsLoggedIn true */}
        <Route
          path="/login"
          element={
            <Login
              onLogin={() => setIsLoggedIn(true)}
              isAdmin={setIsAdmin}
              isLoggedIn={isLoggedIn}
            />
          }
        />

        <Route path="/home-admin" element={<Home_admin />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/home-user" element={<Home_user />} />
        <Route path="/notifs" element={<Notifs />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </Router>
  );
}

export default App;
