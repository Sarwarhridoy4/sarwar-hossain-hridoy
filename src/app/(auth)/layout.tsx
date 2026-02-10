import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      {/* Logo / Brand */}
      <div className='absolute top-6 left-6 text-slate-900 dark:text-white font-bold text-xl'>
        Sarwar Portfolio
      </div>

      <main className='w-full' aria-label='Authentication'>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
