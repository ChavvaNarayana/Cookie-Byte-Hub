import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContextProvider } from "./Context/ToastContext";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";



function App() {
  return (
    <BrowserRouter>
      <ToastContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </AuthContextProvider>
      </ToastContextProvider>
    </BrowserRouter>
  );
}

export default App;