import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Qualification from "./components/qualification/Qualification";
import Scrollup from "./components/scrollup/Scrollup";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
// import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Products/>
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
