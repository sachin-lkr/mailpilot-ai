import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import OtpVerify from "./page/OtpVerify";
import { useAuth } from "./context/AuthContext";
import Dashboard from "./page/Dashboard";


function App() {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
          <Route path="/otpverify" element={<OtpVerify />} />
          <Route path="/dashborad" element={<Dashboard/>}/>
          

      </Routes>
    </>
  );
}

export default App;
