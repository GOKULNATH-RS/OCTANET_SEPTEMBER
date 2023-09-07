import Hero from "./sections/Hero.jsx";
import AboutUs from "./sections/AboutUs.jsx";
import Explore from "./sections/Explore.jsx";
import GettingStarted from "./sections/GettingStarted.jsx";
function App() {
  return (
    <section className="relative">
      <Hero />
      <div className="absolute top-[92vh] h-[60px] w-screen gradient-01 pt-[12px] rounded-tr-full">
        <div className="h-[60px] bg-primary  rounded-tr-full"></div>
      </div>
      <AboutUs />
      <Explore />
      <GettingStarted />
      <div className="absolute bottom-[160px] h-[60px] w-screen gradient-footer pt-[12px] rounded-tl-full rotate-180">
        <div className="h-[60px] bg-primary  rounded-tl-full"></div>
      </div>
      <div className="h-[50vh] w-[70vh] gradient-02 absolute bottom-0 right-0 rounded-full blur-[124px] -z-1" />
    </section>
  );
}

export default App;
