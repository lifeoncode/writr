import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";

function App() {
  const user = false;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
