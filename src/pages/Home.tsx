import { useNavigate } from "react-router-dom";
import CardButton from "../components/CardButton";
import BaseLayoutWithHeader from "../layout/BaseLayoutWithHeader";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  return (
    <BaseLayoutWithHeader>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="pt-10 px-4 mx-auto text-center sm:px-8 sm:pt-16 sm:max-w-[90%] md:max-w-2xl">
          <div className="flex items-center justify-center mb-6">
            <motion.img
              src={Logo}
              className="w-64 object-contain"
              whileHover={{
                scale: 1.1,
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.5 },
              }}
            />
          </div>

          <p className="mb-6 text-gray-500 text-lg sm:text-xl">
            Simpan berbagai akun bank dan E-Wallet kamu dalam satu aplikasi lalu
            bagikan dengan mudah.
          </p>
          {/* <p>Buat Simpan lalu Bagikan</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 px-4 sm:px-8 sm:my-20">
          <CardButton
            title="Mulai Atur Halaman"
            desc="Mulai tambahkan akun bank atau e-wallet kamu lalu sesuaikan dengan preferensi kamu"
            onClick={() => navigate("/create")}
          />
          {/* <CardButton
            title="Statistik"
            desc="Lihat seberapa banyak kunjungan orang lain ke halaman DokRek kamu"
            onClick={() => navigate("/create")}
          /> */}
          <CardButton
            title="Bagikan"
            desc="Bagikan halaman DokRek kamu ke orang lain untuk memudahkan kamu dalam proses transaksi"
            onClick={() => navigate("/create")}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-dot-pattern opacity-30"></div>
      </div>
    </BaseLayoutWithHeader>
  );
}

export default Home;
