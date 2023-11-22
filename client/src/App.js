import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import Nav from "./Component/Website/Navbar";
import Foot from "./Component/Website/Footer";
import CheckoutPage from "./pages/Payment";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Profile from "./Component/Users/Profile";
import Events from "./pages/Event";
import FlipCard from "./pages/Detail";
import CategoryContent from "./pages/CategoryContent";
import { Ticket } from "./Component/Website/Ticket";
import NotFound from "./pages/NotFound";
import Discripiton from "./Component/Website/Discripiton";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile/>}/> 
            <Route path="contact" element={<ContactUs />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="create event" element={<Events />} />
            <Route path="payment" element={<CheckoutPage />} />
            <Route path="category/:category" element={<CategoryContent />} />
            <Route path="blog/:id" element={<FlipCard/>}/>
            <Route path="ticket" element={<Ticket />} />
            <Route path="*" element={<NotFound />} />
           {/* < Route path="discripiton" element={< Discripiton/>} /> */}
          </Routes>
      
        </div>
        <Foot />
        
      </Router>

    </div>
  );
}

export default App;
