"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { useGetPublicResumeQuery } from "@/lib/services/portfolioApi";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className='rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80'>
    <h2 className='text-xl font-semibold text-slate-900 dark:text-white'>
      {title}
    </h2>
    <div className='mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300'>
      {children}
    </div>
  </section>
);

const PublicResumeDetail = ({ id }: { id: string }) => {
  const { data: resume, isLoading } = useGetPublicResumeQuery(id);

  return (
    <div className='min-h-screen text-slate-950 dark:text-slate-100 relative overflow-hidden'>
      <div className='absolute inset-0 page-aurora -z-10 dark:hidden' />
      <div className='absolute inset-0 page-aurora-dark -z-10 hidden dark:block' />
      <div className='absolute inset-0 bg-grid opacity-20 -z-10 dark:hidden' />
      <div className='absolute inset-0 bg-grid-dark opacity-10 -z-10 hidden dark:block' />

      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <Link
          href='/resume'
          className='inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        >
          <ArrowLeft className='h-4 w-4' />
          Back to resumes
        </Link>

        {isLoading ? (
          <div className='mt-10 h-48 rounded-3xl border border-slate-200/60 bg-white/70 shadow-sm animate-pulse dark:border-slate-700/60 dark:bg-slate-900/70' />
        ) : resume ? (
          <div className='mt-10 space-y-6'>
            <div className='rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/80'>
              <div className='flex flex-col md:flex-row md:items-center gap-6'>
                {resume.professionalPhoto && (
                  <Image
                    src={resume.professionalPhoto}
                    alt={resume.title}
                    width={120}
                    height={120}
                    className='h-28 w-28 rounded-2xl object-cover'
                  />
                )}
                <div>
                  <h1 className='text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white'>
                    {resume.title}
                  </h1>
                  <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
                    {resume.summary || "Public resume generated from the portfolio platform."}
                  </p>
                  <div className='mt-4 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400'>
                    {resume.contactInfo?.email && (
                      <span className='inline-flex items-center gap-2'>
                        <Mail className='h-3 w-3' />
                        {resume.contactInfo.email}
                      </span>
                    )}
                    {resume.contactInfo?.phone && (
                      <span className='inline-flex items-center gap-2'>
                        <Phone className='h-3 w-3' />
                        {resume.contactInfo.phone}
                      </span>
                    )}
                    {resume.contactInfo?.location && (
                      <span className='inline-flex items-center gap-2'>
                        <MapPin className='h-3 w-3' />
                        {resume.contactInfo.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {resume.skills?.length ? (
              <Section title='Key Skills'>
                <div className='flex flex-wrap gap-2'>
                  {resume.skills.map((skill) => (
                    <span
                      key={skill}
                      className='rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Section>
            ) : null}

            {resume.experiences?.length ? (
              <Section title='Experience'>
                {resume.experiences.map((item, index) => (
                  <div key={index} className='rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-slate-700/60 dark:bg-slate-950/50'>
                    <p className='font-semibold text-slate-900 dark:text-white'>
                      {item.role || item.title || "Experience"}
                    </p>
                    {item.company && (
                      <p className='text-xs text-slate-500 dark:text-slate-400'>
                        {item.company}
                      </p>
                    )}
                    {item.description && (
                      <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </Section>
            ) : null}

            {resume.education?.length ? (
              <Section title='Education'>
                {resume.education.map((item, index) => (
                  <div key={index} className='rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-slate-700/60 dark:bg-slate-950/50'>
                    <p className='font-semibold text-slate-900 dark:text-white'>
                      {item.institution || item.school || "Education"}
                    </p>
                    {item.degree && (
                      <p className='text-xs text-slate-500 dark:text-slate-400'>
                        {item.degree}
                      </p>
                    )}
                    {item.description && (
                      <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </Section>
            ) : null}

            {resume.projects?.length ? (
              <Section title='Projects'>
                {resume.projects.map((item, index) => (
                  <div key={index} className='rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-slate-700/60 dark:bg-slate-950/50'>
                    <p className='font-semibold text-slate-900 dark:text-white'>
                      {item.name || item.title || "Project"}
                    </p>
                    {item.description && (
                      <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </Section>
            ) : null}

            {resume.certifications?.length ? (
              <Section title='Certifications'>
                {resume.certifications.map((item, index) => (
                  <div key={index} className='rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-slate-700/60 dark:bg-slate-950/50'>
                    <p className='font-semibold text-slate-900 dark:text-white'>
                      {item.name || item.title || "Certification"}
                    </p>
                    {item.issuer && (
                      <p className='text-xs text-slate-500 dark:text-slate-400'>
                        {item.issuer}
                      </p>
                    )}
                  </div>
                ))}
              </Section>
            ) : null}
          </div>
        ) : (
          <div className='mt-16 rounded-3xl border border-dashed border-slate-300/80 bg-white/70 p-8 text-center text-sm text-slate-600 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300'>
            Resume not found or not public.
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicResumeDetail;
