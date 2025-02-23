import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

const MainLayout = ({ children, header }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        {header && (
          <div className="flex items-center p-4 bg-white border-b shadow-md border-gray-300">
            {header}
          </div>
        )}
        <main className="p-4 h-full" style={{ backgroundColor: "#eeeeee" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
