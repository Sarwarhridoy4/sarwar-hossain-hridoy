"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, User, LayoutDashboard, LogOut, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/toggleMode";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Prevent rendering until client has determined session
  if (status === "loading") return null;
  const handleSignOut = () => {
    // Remove custom non-HTTP-only cookie
    document.cookie = "accessToken=; path=/; max-age=0;";

    // Sign out from NextAuth
    signOut({
      callbackUrl: "/login",
    });
  };

  return (
    <nav
      className='sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
      aria-label='Primary'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 group'>
            <div className='relative'>
              <Rocket className='h-8 w-8 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300' />
              <div className='absolute inset-0 blur-xl bg-blue-500/30 group-hover:bg-blue-500/50 transition-all duration-300 rounded-full'></div>
            </div>
            <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
              Sarwar Hossain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='relative px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group'
              >
                {link.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out'></span>
                <span className='absolute inset-0 rounded-lg bg-blue-500/0 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20 transition-colors duration-300'></span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className='flex items-center gap-3'>
            <ModeToggle />

            {/* Auth Section */}
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {session.user?.image ? (
                    <Image
                      src={session?.user?.image}
                      alt={session?.user?.name || "User"}
                      width={40}
                      height={40}
                      className='rounded-2xl'
                      priority
                    />
                  ) : (
                    <User className='h-5 w-5 text-purple-600 dark:text-purple-400' />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-48'>
                  <DropdownMenuLabel>
                    {session.user?.name || "User"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className='h-4 w-4 mr-2' /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LayoutDashboard className='h-4 w-4 mr-2' /> Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div onClick={handleSignOut} className='flex gap-2'>
                      <LogOut className='h-4 w-4 mr-2' /> Logout
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href='/login'>
                <Button variant='default' size='sm'>
                  Sign In
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant='outline'
              size='icon'
              className='md:hidden'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls='mobile-nav'
              aria-label='Toggle navigation menu'
            >
              {mobileMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id='mobile-nav'
          className='md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg'
        >
          <div className='px-4 py-4 space-y-2'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='block px-4 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200'
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile auth buttons */}
            {session ? (
              <Button
                variant='outline'
                className='w-full mt-2'
                onClick={handleSignOut}
              >
                Logout
              </Button>
            ) : (
              <Link href='/login'>
                <Button variant='default' className='w-full mt-2'>
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
