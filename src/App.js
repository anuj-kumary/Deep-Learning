import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="about" element={<About />} />
   <Route path="contact" element={<Contact />} />
   <Route path="signin" element={<SignIn />} />
   <Route path="signup" element={<SignUp />} />
    </Routes>
   </BrowserRouter>
   </>

  );
}

export default App;
