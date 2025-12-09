import { ReactNode } from "react";

const AdminDashBoardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen flex items-center justify-center '>
      {/* Logo / Brand */}
      <div className='absolute top-6 left-6 text-white font-bold text-xl'>
        Sarwar Portfolio
      </div>

      {/* Auth card container */}
      <div className='w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20'>
        {children}
      </div>
    </div>
  );
};

export default AdminDashBoardLayout;
