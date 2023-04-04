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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/" element={<Root />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="/account" element={<Account />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/error" element={<Error />} />
          <Route path="/under-maintainance" element={<UnderMaintainance />} />
          <Route path="/buttons" element={<Buttons />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
