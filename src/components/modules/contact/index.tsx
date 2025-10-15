"use client";
import React from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className='min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-950'>
      <main className='max-w-3xl mx-auto px-4 sm:px-6 py-16'>
        <div className='rounded-2xl shadow-2xl p-8 sm:p-12 backdrop-blur-sm border bg-white border-gray-200 dark:bg-gray-900/50 dark:border-gray-800 dark:shadow-purple-500/10'>
          <div className='mb-10 text-center'>
            <div className='inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20'>
              <Mail className='w-10 h-10 text-blue-600 dark:text-cyan-400' />
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600'>
              Get in Touch
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              I&apos;d love to hear from you. Send me a message and I&apos;ll
              respond as soon as possible.
            </p>
          </div>

          <form
            className='space-y-7'
            action={`https://formbold.com/s/${process.env.NEXT_PUBLIC_FORMBOLD_API_KEY}`}
            method='POST'
          >
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300'
              >
                Name
              </label>
              <div className='relative'>
                <User className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500' />
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-cyan-500 dark:focus:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/20'
                  placeholder='John Doe'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300'
              >
                Email
              </label>
              <div className='relative'>
                <Mail className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500' />
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-cyan-500 dark:focus:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/20'
                  placeholder='john@example.com'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300'
              >
                Message
              </label>
              <div className='relative'>
                <MessageSquare className='absolute left-4 top-4 w-5 h-5 text-gray-400 dark:text-gray-500' />
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  className='w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all resize-none bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-cyan-500 dark:focus:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/20'
                  placeholder="Tell me what's on your mind..."
                />
              </div>
            </div>

            <button
              type='submit'
              className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-800 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-500/30 text-white`}
            >
              <Send className='w-6 h-6' />
              Send Message
            </button>
          </form>
        </div>

        <div className='mt-10 text-center text-gray-600 dark:text-gray-500'>
          <p className='text-sm'>
            Powered by FormBold • Typically respond within 24 hours
          </p>
        </div>
      </main>
    </div>
  );
}
