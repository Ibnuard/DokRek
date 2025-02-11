export function InputModal() {
  function onCancelButton() {
    const modal = document.getElementById(
      "input_modal"
    ) as HTMLDialogElement | null;
    modal?.close();
  }

  return (
    <dialog id="input_modal" className="modal">
      <div className="modal-box bg-white">
        <h3 className="text-lg font-semibold text-black">Tambahkan Akun</h3>
        <div className="flex flex-col gap-4 mt-8">
          <label className="form-control w-full max-w-lg">
            <div className="label mb-3">
              <span className="label-text text-slate-800">
                Nomor rekening / akun
              </span>
            </div>
            <input
              type="text"
              placeholder="Masukan nomor rekening / akun"
              className="input input-md input-bordered w-full max-w-lg text-black border border-slate-500 bg-white placeholder:text-slate-400"
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label mb-3">
              <span className="label-text text-slate-800">
                Nomor rekening atau nomor akun
              </span>
            </div>
            <input
              type="text"
              placeholder="Masukan nomor rekening / akun"
              className="input input-md input-bordered w-full max-w-lg text-black border border-slate-500 bg-white placeholder:text-slate-400"
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label mb-3">
              <span className="label-text text-slate-800">
                Nama pemilik rekening
              </span>
            </div>
            <input
              type="text"
              placeholder="Masukan nomor rekening / akun"
              className="input input-md input-bordered w-full max-w-lg text-black border border-slate-500 bg-white placeholder:text-slate-400"
            />
          </label>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mt-8">
          <button className="btn font-normal text-white">Simpan</button>
          <button
            className="btn btn-outline font-normal text-black hover:bg-white"
            onClick={onCancelButton}
          >
            Batalkan
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
