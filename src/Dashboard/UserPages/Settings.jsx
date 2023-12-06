import React, { useContext, useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import axios from "axios";
import Cookies from "js-cookie";

const Settings = () => {
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const { apiBaseUrl } = useContext(GlobalContext);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Side Navigation */}
        <aside className="w-64 bg-[#313233] p-6 text-white">
          <SideNav />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <Header />

          {/* Main Content Area */}
          <section className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 p-4 h-[400px]">
              {/* Card 1 */}
              <div className=" bg-violet-300 p-4 rounded shadow-md flex justify-start items-start">
                <h5 className="text-[13px] font-semibold text-gray-400 mb-2">
                  Total Users
                </h5>
                <p className="text-2xl font-extrabold">T40aaa</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Settings;
