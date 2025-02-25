import Header from "@components/common/Header";
import Sidebar from "@components/common/Sidebar";

import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  header?: ReactNode;
}

const MainLayout = ({ children, header }: MainLayoutProps) => {
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
