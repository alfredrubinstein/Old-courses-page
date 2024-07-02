import "./App.css";

import { Navbar, Footer } from "./Components";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Home, About, Gallery, Contact, Course, Courses } from "./Pages";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/course/:id" element={<Course/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;

