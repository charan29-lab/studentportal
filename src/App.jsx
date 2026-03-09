import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Certificates from "./pages/Certificates";
import Courses from "./pages/Courses";
import Reminders from "./pages/Reminders";
import Announcements from "./pages/Announcements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;