import { BrowserRouter } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Gallery />
        <Plans />
        <Trainers />
        <NotFound />
      </BrowserRouter>
    </>
  );
};

export default App;
