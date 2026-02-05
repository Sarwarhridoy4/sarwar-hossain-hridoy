import { Mail, User, MessageSquare, Send, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <div className='min-h-screen transition-colors duration-300 text-slate-950 dark:text-slate-100 relative overflow-hidden'>
      <div className='absolute inset-0 page-aurora -z-10 dark:hidden' />
      <div className='absolute inset-0 page-aurora-dark -z-10 hidden dark:block' />
      <div className='absolute inset-0 bg-grid opacity-20 -z-10 dark:hidden' />
      <div className='absolute inset-0 bg-grid-dark opacity-10 -z-10 hidden dark:block' />
      <main className='max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12'>
        <header className='text-center'>
          <p className='text-xs uppercase tracking-[0.3em] text-slate-500'>
            Contact
          </p>
          <h1 className='mt-3 text-4xl sm:text-5xl font-semibold text-slate-900 dark:text-white'>
            Let&apos;s build something impactful
          </h1>
          <p className='mt-4 text-base text-slate-600 dark:text-slate-400'>
            Share project details, timelines, or quick questions. I typically
            respond within 24 hours.
          </p>
        </header>
        {/* Contact Info Section */}
        <section className='rounded-2xl shadow-xl p-8 sm:p-10 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10'>
          <h3 className='text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white'>
            Contact Information
          </h3>

          <div className='flex flex-col sm:flex-row justify-between items-center gap-8 text-slate-700 dark:text-slate-300'>
            <a
              href='https://maps.google.com/?q=Uttara,Dhaka,+Bangladesh'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors'
            >
              <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20'>
                <MapPin className='w-5 h-5 text-blue-600 dark:text-cyan-400' />
              </div>
              <div>
                <p className='font-semibold'>Address</p>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                 Uttara, Dhaka, Bangladesh
                </p>
              </div>
            </a>

            <a
              href='mailto:sarwarhridoy4@gmail.com'
              className='flex items-center gap-3 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors'
            >
              <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20'>
                <Mail className='w-5 h-5 text-blue-600 dark:text-cyan-400' />
              </div>
              <div>
                <p className='font-semibold'>Email</p>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  sarwarhridoy4@gmail.com
                </p>
              </div>
            </a>

            <a
              href='tel:+8801932893580'
              className='flex items-center gap-3 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors'
            >
              <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20'>
                <Phone className='w-5 h-5 text-blue-600 dark:text-cyan-400' />
              </div>
              <div>
                <p className='font-semibold'>Phone</p>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  +880 1932893580
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Form Section */}
        <section className='rounded-2xl shadow-2xl p-8 sm:p-12 backdrop-blur-sm border bg-white/85 border-slate-200/70 dark:bg-slate-900/80 dark:border-slate-700/60 dark:shadow-purple-500/10'>
          <div className='mb-10 text-center'>
            <div className='inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 dark:from-cyan-500/20 dark:via-blue-600/20 dark:to-purple-700/20'>
              <Mail className='w-10 h-10 text-blue-600 dark:text-cyan-400' />
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold mb-3 text-slate-900 dark:text-white'>
              Send Me a Message
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-400'>
              I&apos;d love to hear from you. Just fill out the form below.
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
                className='block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300'
              >
                Name
              </label>
              <div className='relative'>
                <User className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500' />
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  autoComplete='name'
                  className='w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all bg-white/85 border-slate-300/80 text-slate-900 placeholder-slate-400 focus:border-blue-500 dark:bg-slate-900/70 dark:border-slate-700/60 dark:text-white dark:placeholder-slate-400 dark:focus:border-cyan-500 dark:focus:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-blue-500/20'
                  placeholder='John Doe'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300'
              >
                Email
              </label>
              <div className='relative'>
                <Mail className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500' />
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  autoComplete='email'
                  className='w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all bg-white/85 border-slate-300/80 text-slate-900 placeholder-slate-400 focus:border-blue-500 dark:bg-slate-900/70 dark:border-slate-700/60 dark:text-white dark:placeholder-slate-400 dark:focus:border-cyan-500 dark:focus:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-blue-500/20'
                  placeholder='john@example.com'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300'
              >
                Message
              </label>
              <div className='relative'>
                <MessageSquare className='absolute left-4 top-4 w-5 h-5 text-slate-400 dark:text-slate-500' />
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  autoComplete='off'
                  className='w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all resize-none bg-white/85 border-slate-300/80 text-slate-900 placeholder-slate-400 focus:border-blue-500 dark:bg-slate-900/70 dark:border-slate-700/60 dark:text-white dark:placeholder-slate-400 dark:focus:border-cyan-500 dark:focus:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-blue-500/20'
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
        </section>

        {/* Footer */}
        <div className='text-center text-slate-600 dark:text-slate-500'>
          <p className='text-sm'>
            Powered by FormBold • Typically respond within 24 hours
          </p>
        </div>
      </main>
    </div>
  );
}
