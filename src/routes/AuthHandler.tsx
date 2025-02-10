import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUserStore from "../store/useUser";

const AuthHandler = () => {
  const [isHasToken, setIsHasToken] = useState<boolean | null>(null);
  const { pathname } = useLocation();
  const { user } = useUserStore();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (user.id) {
      setIsHasToken(true);
    } else {
      setIsHasToken(false);
    }
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
