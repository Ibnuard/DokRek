import CardButton from "../components/CardButton";
import BaseLayoutWithHeader from "../layout/BaseLayoutWithHeader";

function Home() {
  return (
    <BaseLayoutWithHeader>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="pt-10 px-4 mx-auto text-center sm:px-8 sm:pt-16 sm:max-w-[90%] md:max-w-2xl">
          <div className="mb-6 font-semibold text-gray-950 text-xl sm:text-2xl">
            Simpan berbagai akun bank dan E-Wallet kamu dalam satu aplikasi lalu
            bagikan dengan mudah.
          </div>
          <p>Buat Simpan lalu Bagikan</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 px-4 sm:px-8 sm:my-20">
          <CardButton
            title="Mulai Atur Halaman"
            desc="Mulai tambahkan akun bank atau e-wallet kamu lalu sesuaikan dengan preferensi kamu"
          />
          <CardButton
            title="Statistik"
            desc="Lihat seberapa banyak kunjungan orang lain ke halaman DokRek kamu"
          />
          <CardButton
            title="Bagikan"
            desc="Bagikan halaman DokRek kamu ke orang lain untuk memudahkan kamu dalam proses transaksi"
          />
        </div>
      </div>
    </BaseLayoutWithHeader>
  );
}

export default Home;
