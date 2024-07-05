import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Home, About, Gallery, Contact, Course, Courses,Dashboard,Login, Register,StudyPage,PaymentPage } from "./Pages";

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/course/:id" element={<Course/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/studypage" element={<StudyPage/>}></Route>
          <Route path="/paymentpage" element={<PaymentPage/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;







