import { FaBell } from "react-icons/fa";
import { HiUserCircle  } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-300">
      <img src="/logo-2.png" alt="Logo" className="h-9" />
      <div className="flex items-center space-x-4">
        <span className="font-medium hidden sm:block">Bienvenida, Olivia</span>
        <HiUserCircle  className="text-gray-500 h-6 w-6" />
        <FaBell className="text-gray-500 cursor-pointer h-6 w-6" />
      </div>
    </header>
  );
};

export default Header;
