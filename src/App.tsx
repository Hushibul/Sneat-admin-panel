import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Account from "./pages/Account";
import RegisterForm from "./components/forms/RegisterForm";
import Root from "./components/layouts/Root";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Notification from "./pages/Notification";
import Connection from "./pages/Connection";
import Error from "./pages/Error";
import UnderMaintainance from "./pages/UnderMaintainance";
import Buttons from "./pages/Buttons";
import Accordions from "./pages/Accordions";
import Alerts from "./pages/Alerts";
import Badges from "./pages/Badges";
import Cards from "./pages/Cards";
import Carousal from "./pages/Carousals";
import Footer from "./pages/Footer";
import PrivateRoutes from "./routes/PrivateRoute";
import Collapse from "./pages/Collapse";
import Offcanvas from "./pages/Offcanvas";
import DropDown from "./pages/DropDown";
import Modals from "./pages/Modals";
import Spinners from "./pages/Spinners";
import Tabs from "./pages/Tabs";
import ToolTip from "./pages/ToolTip";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/*" element={<PrivateRoutes />}>
          <Route path="dashboard/*" element={<Root />}>
            <Route index element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="notification" element={<Notification />} />
            <Route path="connection" element={<Connection />} />
            <Route path="error" element={<Error />} />
            <Route path="under-maintainance" element={<UnderMaintainance />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="accordions" element={<Accordions />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="badges" element={<Badges />} />
            <Route path="cards" element={<Cards />} />
            <Route path="carousel" element={<Carousal />} />
            <Route path="footer" element={<Footer />} />
            <Route path="collapse" element={<Collapse />} />
            <Route path="offcanvas" element={<Offcanvas />} />
            <Route path="dropdown" element={<DropDown />} />
            <Route path="modals" element={<Modals />} />
            <Route path="spinners" element={<Spinners />} />
            <Route path="tabs" element={<Tabs />} />
            <Route path="tooltips" element={<ToolTip />} />
          </Route>
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
