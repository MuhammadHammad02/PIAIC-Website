import About  from "./components/About";
import Availableprograme from "./components/Availableprograme";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Instructor from "./components/Instructor";
import Partnerstra from "./components/Partnerstra";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Availableprograme/>
      <About/>
      <Instructor/>
      <Partnerstra/>
      <Contact/>
    </div>
  )
}