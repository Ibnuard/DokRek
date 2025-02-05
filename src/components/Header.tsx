import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed z-10 inset-x-0 top-0 h-14 border-b border-slate-300 bg-white">
      <div className="flex items-center justify-between max-w-7xl h-14 px-4 mx-auto sm:px-8">
        <img src={Logo} className="w-24 object-contain" />
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
