import { ReactNode } from "react";
import Header from "../components/Header";

type TBaseLayout = {
  children: ReactNode;
};

function BaseLayoutWithHeader({ children }: TBaseLayout): ReactNode {
  const GET_YEAR = new Date().getFullYear();

  return (
    <div className="flex flex-col max-w-7xl mt-14 mx-auto min-h-screen">
      <Header />
      <main>{children}</main>
      <footer className="p-4 flex flex-col gap-2 items-center justofy-center border-t border-slate-300">
        <div className="flex flex-row gap-4 text-gray-600">
          <p>Support</p>
          <p>Feedback</p>
        </div>
        <p className=" text-gray-400">© {GET_YEAR} DokRek.</p>
      </footer>
    </div>
  );
}

export default BaseLayoutWithHeader;
