import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Explore from "./components/Explore.jsx";
import Certificates from "./components/Certificates.jsx";
import Courses from "./components/Courses.jsx";
import Announcements from "./components/Announcements.jsx";
import Reminders from "./components/Reminders.jsx";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/reminders" element={<Reminders />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);