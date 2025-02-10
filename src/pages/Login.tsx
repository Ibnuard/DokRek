import BaseLayout from "../layout/BaseLayout";
import Logo from "../assets/logo.png";
import { ParticleBg } from "../components/Particles";
import {
  TokenResponse,
  googleLogout,
  useGoogleLogin,
} from "@react-oauth/google";
import { useState } from "react";
import { useGetProfile } from "../hooks/useGetProfile";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/useUser";

type TCodeResponse = Omit<
  TokenResponse,
  "error" | "error_description" | "error_uri"
> | null;

function Login() {
  const navigate = useNavigate();
  const { saveUser } = useUserStore();

  // login google auth
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleOnSuccessLogin(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  // handle on success login
  async function handleOnSuccessLogin(codeResponse: TCodeResponse) {
    if (codeResponse?.access_token) {
      const userData = await useGetProfile(codeResponse.access_token);

      if (userData !== "ERROR") {
        localStorage.setItem("USER_SESSION", JSON.stringify(userData));
        saveUser(userData);
        navigate("/", { replace: true });
      }
    }
  }

  return (
    <BaseLayout>
      <ParticleBg />
      <div className=" z-100 flex flex-col items-center gap-y-12">
        <div className=" flex flex-col items-center">
          <img src={Logo} className="w-52 object-contain" />
          <span className="text-sm text-gray-600">Buat, Simpan, Bagikan</span>
        </div>

        <button
          onClick={() => login()}
          className="btn btn-md rounded-md bg-white font-normal text-black font-medium"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Masuk Akun Google
        </button>
      </div>
    </BaseLayout>
  );
}

export default Login;
