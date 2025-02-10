import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import useUserStore from "../store/useUser";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  return (
    <header className="fixed z-10 inset-x-0 top-0 h-14 border-b border-slate-300 bg-white">
      <div className="flex items-center justify-between max-w-7xl h-14 px-4 mx-auto sm:px-8">
        <img
          onClick={() => navigate("/", { replace: true })}
          src={Logo}
          className="w-24 object-contain cursor-pointer"
        />
        <div className="avatar">
          <div className="w-10 h-10 rounded-full bg-gray-400 overflow-hidden">
            <img
              src={user.picture}
              alt="User Avatar"
              className="w-full h-full object-cover"
              //onError={(e) => (e.currentTarget.src = "/fallback-avatar.png")}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
