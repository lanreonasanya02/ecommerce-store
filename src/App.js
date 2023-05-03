import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./components/collections/Collections";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route index element={<Collections />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            // <Route path="login" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
