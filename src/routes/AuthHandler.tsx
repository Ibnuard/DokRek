import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthHandler = () => {
  const [isHasToken, setIsHasToken] = useState<boolean | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Cek token dari localStorage atau sessionStorage
    const token = localStorage.getItem("USER_SESSION");
    setIsHasToken(!!token);
  }, [pathname]);

  if (isHasToken === null) {
    return null; // Tampilkan layar kosong saat cek token (hindari blank putih)
  }

  if (!isHasToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthHandler;
