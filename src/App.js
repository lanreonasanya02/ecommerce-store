import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./components/collections/Collections";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import ShopContextProvider from "./context/shop-context";

function App() {
  return (
    <>
      <Router>
        <ShopContextProvider>
          <Navbar />
          <div className="App">
            <Routes>
              <Route index element={<Collections />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </ShopContextProvider>
      </Router>
    </>
  );
}

export default App;
