"use client";
import React, { useState } from "react";
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

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Blogs", href: "#blogs" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className=''>
      <div className='bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'>
        {/* Navbar */}
        <nav className='sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              {/* Logo */}
              <div className='flex items-center gap-2 group cursor-pointer'>
                <div className='relative'>
                  <Rocket className='h-8 w-8 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300' />
                  <div className='absolute inset-0 blur-xl bg-blue-500/30 group-hover:bg-blue-500/50 transition-all duration-300 rounded-full'></div>
                </div>
                <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                  Sarwar Hossain
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className='hidden md:flex items-center gap-1'>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className='relative px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group'
                  >
                    {link.name}
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out'></span>
                    <span className='absolute inset-0 rounded-lg bg-blue-500/0 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20 transition-colors duration-300'></span>
                  </a>
                ))}
              </div>

              {/* Right Section */}
              <div className='flex items-center gap-3'>
                {/* Theme Toggle */}
                <ModeToggle />

                {/* User Menu */}
                {isAuthenticated && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='outline'
                        size='icon'
                        className='relative border-slate-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20'
                      >
                        <User className='h-5 w-5 text-purple-600 dark:text-purple-400' />
                        <span className='absolute inset-0 rounded-md bg-gradient-to-r from-purple-500/0 to-pink-500/0 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300'></span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align='end'
                      className='w-48 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                    >
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator className='bg-slate-200 dark:bg-slate-800' />
                      <DropdownMenuItem className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800'>
                        <User className='h-4 w-4 mr-2' />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800'>
                        <LayoutDashboard className='h-4 w-4 mr-2' />
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className='bg-slate-200 dark:bg-slate-800' />
                      <DropdownMenuItem className='cursor-pointer hover:bg-red-50 dark:hover:bg-red-950 text-red-600 dark:text-red-400'>
                        <LogOut className='h-4 w-4 mr-2' />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}

                {/* Mobile Menu Button */}
                <Button
                  variant='outline'
                  size='icon'
                  className='md:hidden border-slate-300 dark:border-slate-700'
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            <div className='md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg'>
              <div className='px-4 py-4 space-y-2'>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className='block px-4 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
