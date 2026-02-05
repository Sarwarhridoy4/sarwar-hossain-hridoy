import React from "react";
import { Github, Linkedin, Twitter, Rocket } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "Blogs", href: "/blogs" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  ];

  return (
    <footer className='relative border-t border-slate-200 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80'>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2 group'>
              <div className='relative'>
                <Rocket className='h-8 w-8 text-blue-500 dark:text-blue-400 transition-transform group-hover:scale-110 group-hover:-rotate-12 duration-300' />
                <div className='absolute inset-0 blur-xl bg-blue-500/30 group-hover:bg-blue-500/50 transition-all duration-300 rounded-full'></div>
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                Sarwar Hossain
              </span>
            </div>
            <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
              Building reliable software and refined interfaces for growing
              teams.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
              Quick Links
            </h3>
            <div className='space-y-2'>
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='block text-sm text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200'
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
              Connect
            </h3>
            <div className='flex gap-3'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative'
                  aria-label={social.name}
                >
                  <div className='relative p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'>
                    <social.icon className='h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300' />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='pt-8 border-t border-slate-200 dark:border-slate-800/50'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              © {new Date().getFullYear()} Sarwar Hossain. All rights reserved.
            </p>
            <p className='text-sm text-slate-500 dark:text-slate-500'>
              Built with Next.js, TailwindCSS, and a custom API stack.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
