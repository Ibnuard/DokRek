import { ClipboardIcon, PencilIcon } from "@heroicons/react/24/outline";
import DotBg from "../assets/dot-bg.svg";

function CardAccount() {
  return (
    <div className="relative border p-4 rounded-md flex flex-row items-center justify-between transition-color border-slate-400 hover:border-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,#00000020_1px,transparent_2px)] bg-[size:16px_16px] z-[-1]"></div>

      {/* Konten */}
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 text-sm font-medium">MANDIRI</p>
        <p className="text-2xl font-medium text-gray-950">123457</p>
        <p className=" text-sm text-gray-700 mt-2">Mr. What sit Toya</p>
      </div>
      <div className="flex flex-row gap-4">
        <ClipboardIcon className="w-6 h-6 cursor-pointer" />
        <PencilIcon className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default CardAccount;
