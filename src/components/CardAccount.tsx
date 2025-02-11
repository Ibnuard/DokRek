import { ClipboardIcon, PencilIcon } from "@heroicons/react/24/outline";
import DotBg from "../assets/dot-bg.svg";

function CardAccount() {
  return (
    <div className="relative border p-4 rounded-md flex items-center justify-between transition-colors border-slate-400 hover:border-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,#00000020_1px,transparent_2px)] bg-[size:16px_16px] z-[-1]"></div>

      {/* Konten Kiri */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <p className="text-gray-500 text-sm font-medium">MANDIRI</p>
        <p className="text-2xl font-medium text-gray-950 max-w-full break-all">
          12345789
        </p>
        <p className="text-sm text-gray-700 mt-2">Mr. What sit Toya</p>
      </div>

      {/* Ikon Kanan */}
      <div className="flex flex-row gap-4 shrink-0 ml-4">
        <ClipboardIcon className="w-6 h-6 cursor-pointer" />
        <PencilIcon className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default CardAccount;
