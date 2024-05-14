import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header className="header">
        <div className="header__head py-3 ">
          <Navbar />
        </div>
      </header>
      <section className="main shadow-inner bg-[#fafafa]">
        <Outlet />
      </section>
    </>
  );
}

export default RootLayout;
