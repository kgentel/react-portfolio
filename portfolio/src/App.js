import Nav from "./components/navbar/navbar";
import About from "./components/about_me/about_me";
import Timeline from "./components/timeline/timeline";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div id="home">
      <Nav />
      <About />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
