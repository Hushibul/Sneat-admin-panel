import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { loginData } = useAuth();
  const location = useLocation();

  return loginData ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
