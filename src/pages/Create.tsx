import { ArchiveBoxXMarkIcon, PencilIcon } from "@heroicons/react/24/outline";
import CardAccount from "../components/CardAccount";
import BaseLayoutWithHeader from "../layout/BaseLayoutWithHeader";
import { InputModal } from "../components/Modal/InputModal";

function Create() {
  function onCreateButton() {
    const modal = document.getElementById(
      "input_modal"
    ) as HTMLDialogElement | null;
    modal?.showModal();
  }

  return (
    <BaseLayoutWithHeader>
      <div className="min-h-screen pt-10 px-4 mx-auto sm:px-8 sm:pt-16">
        <div className="flex flex-row justify-between items-center mb-8">
          <div className="flex flex-row items-center gap-2">
            <p
              className="text-xl font-medium text-gray-950 cursor-pointer tooltip tooltip-bottom"
              data-tip={"Lihat Halaman"}
            >
              DevDokRek
            </p>
            <div className="tooltip tooltip-bottom" data-tip={"Edit"}>
              <PencilIcon className="w-4 h-4 mx-1 cursor-pointer" />
            </div>
          </div>

          <button
            className="btn rounded-md font-normal"
            onClick={onCreateButton}
          >
            Tambah Akun
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border border-slate-300 rounded-md p-4">
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
        </div>

        {/* <div className="grid grid-cols-1 gap-4 border border-slate-300 rounded-md py-24">
          <div className="flex flex-col items-center justify-center">
            <ArchiveBoxXMarkIcon className="w-14 h-14 text-gray-400 mb-2 " />
            <p className="text-sm text-center text-gray-400">
              Belum ada item apapun disini
            </p>
          </div>
        </div> */}
      </div>
      <InputModal />
    </BaseLayoutWithHeader>
  );
}

export default Create;
