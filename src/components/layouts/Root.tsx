import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="xl:ml-64">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;
