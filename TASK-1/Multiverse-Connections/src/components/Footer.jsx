import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="w-full h-[160px] flex justify-around items-center ">
      <div className="flex-1 flex-center">
        <img src={Logo} alt="Logo" className="scale-150" />
      </div>
      <div className="flex-1 flex gap-10 items-start">
        <div className="flex flex-col gap-4">
          <h2 className="font-aquireLight tracking-[6px]">Support</h2>
          <div className="font-aquire text-sm tracking-wider">
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-aquireLight tracking-[6px]">Social</h2>
          <div className="font-aquire text-sm tracking-wider">
            <p>Twitter</p>
            <p>Instagram</p>
            <p>youtube</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
