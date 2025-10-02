import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen flex items-center justify-center '>
      {/* Logo / Brand */}
      <div className='absolute top-6 left-6 text-white font-bold text-xl'>
        Sarwar Portfolio
      </div>

      {/* Auth card container */}
      <div className='w-full '>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
