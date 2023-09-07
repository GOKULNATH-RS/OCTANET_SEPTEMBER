import Footer from "../components/Footer";

const GettingStarted = () => {
  return (
    <section
      id="GetStarted"
      className="bg-primary h-[100vh] w-[100vw] font-aquire text-white flex justify-between items-center flex-col "
    >
      <h1 className="section-head pt-5">Get started</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-10 flex-wrap justify-center">
          <input type="text" placeholder="Email" className="input"></input>
          <input type="tel" placeholder="Phone" className="input"></input>
        </div>
        <div className="w-40 h-14 rounded-full p-[0.8px] text-2xl gradient-01 flex-center max-md:self-center">
          <button className="bg-primary h-full w-full rounded-full ">
            Join
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GettingStarted;
