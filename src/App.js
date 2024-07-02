import "./App.css";

import { Navbar, Footer } from "./Components";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Home, About, Gallery, Contact, Course, Courses,Dashboard,Login, Register } from "./Pages";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/course/:id" element={<Course/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;







