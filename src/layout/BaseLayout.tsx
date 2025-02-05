import { ReactNode } from "react";

type TBaseLayout = {
  children: ReactNode;
};

function BaseLayout({ children }: TBaseLayout): ReactNode {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center overflow-hidden">
      <main className="w-full max-w-md flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}

export default BaseLayout;
