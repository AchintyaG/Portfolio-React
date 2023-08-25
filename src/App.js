import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

const sectionData = [
  {
    title: "Skills",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat quidem quibusdam quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat",
  },

  {
    title: "Education",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat quidem quibusdam quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat",
  },

  {
    title: "Experience",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat quidem quibusdam quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat",
  },
]
function App() {
  return (
    <div>
      <Navbar />
      <About />
      {sectionData.map((value) => (
        <Section title={value.title} des={value.des} />
      ))
      }
      <Footer />
    </div>
  );
}

export default App;
