import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
