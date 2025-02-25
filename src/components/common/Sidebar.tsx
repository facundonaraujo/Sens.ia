import { FaThLarge, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-16 sm:w-20 bg-white h-screen flex flex-col items-center py-4 space-y-6">
      <FaThLarge className="text-2xl text-gray-600 cursor-pointer" />
      <FaChartBar className="text-2xl text-gray-600 cursor-pointer" />
      <FaCog className="text-2xl text-gray-600 cursor-pointer" />
    </aside>
  );
};

export default Sidebar;
