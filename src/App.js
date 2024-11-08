// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'; 
import Home from './components/Pages/Home/Home';
import LoginForm from './components/LoginModal/LoginPage';
import ForgotPassword from './components/LoginModal/ForgotPassword'
import SignUp from './components/LoginModal/SignUp'
import UpdateProfile from './components/LoginModal/UpdateProfile'
import PlaceDetails from './components/Pages/PlaceDetails/PlaceDetails'; // Import PlaceDetails

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />  
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/update-profile" element={<UpdateProfile />} /> 
          <Route path="/place-details" element={<PlaceDetails />} /> {/* Add the new route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
