import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';
import { useAuth } from './contexts/auth-context';
import WelcomePage from './components/WelcomePage';

function App() {
  const { authToken } = useAuth();
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/welcome'
            element={authToken ? <WelcomePage /> : <SignIn />}
          />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
