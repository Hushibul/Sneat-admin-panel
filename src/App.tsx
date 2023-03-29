import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RegisterForm from "./components/forms/RegisterForm";
import Root from "./components/layouts/Root";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/" element={<Root />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="register" element={<RegisterForm />} />
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
