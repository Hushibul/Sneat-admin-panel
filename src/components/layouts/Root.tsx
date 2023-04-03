import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  return (
    <>
      <header className="xl:ml-60">
        <Navbar />
      </header>
      <main className="xl:ml-64">
        <Outlet />
      </main>
      <footer className="xl:ml-64">
        <Footer />
      </footer>
    </>
  );
};

export default Root;
