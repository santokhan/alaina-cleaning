import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "./about.css";
import "./main.css";
import ContactFrom from "../components/contact/ContactFrom";

export default function About() {
  return (
    <>
      <Header></Header>
      <div className="py-10"></div>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </>
  );
}
