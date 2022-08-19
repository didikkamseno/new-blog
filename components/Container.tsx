import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';
import useSound from 'use-sound';
import Footer from 'components/Footer';
import Nav from 'components/menu/Nav';
// import MobileMenu from 'components/MobileMenu';
import { Tooltip } from '@nextui-org/react';
import { useKBar } from 'kbar';
import { Command } from 'react-feather';
import { MenuIcon } from '@heroicons/react/outline';
import { XIcon } from "@heroicons/react/outline";

function NavItem({ href, text, description }) {
  const router = useRouter();
  const isActive = router.pathname.split('/')[1] === href.split('/')[1];
  const [playpageChange] = useSound("/media/page-change.mp3");
  const [playMenuon] = useSound("/media/switch-on.mp3");

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-800 bg-gradient-to-br from-header-active-from via-header-active-via to-header-active-to'
            : 'font-semibold text-gray-800 dark:text-gray-400',
          'hidden font-semibold md:inline-block px-3 py-2 rounded-lg  text-gray-800 dark:text-gray-200 hover:dark:text-gray-700 hover:bg-gradient-to-tr hover:from-header-hover-from hover:via-header-hover-via hover:to-header-hover-to'
        )}
        onClick={() => {
          playpageChange()
        }}
      >
        <Tooltip
          content={description}
          color="secondary"
          placement="bottomStart"
        >
          <span className="text-base capsize">{text}</span>
        </Tooltip>
      </a>
    </NextLink>
  );
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [playpageSwitch] = useSound("/media/page-switch.mp3");
  const [playMenuon] = useSound("/media/switch-on.mp3");
  const [open, setOpen] = useState(false);
  const { query } = useKBar()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Kapil Chaudhary - Researcher',
    description: `Researcher by profession, Coder by hobby.`,
    image: '/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://heykapil.in${router.asPath}`} />
        <link rel="canonical" href={`https://heykapil.in${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Kapil Chaudhary" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kapiljch" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="bg-gray-50 dark:bg-gray-900">
      <Nav open={open} setOpen={setOpen} />
           <div className="top-0 sticky z-10 backdrop-blur supports-backdrop-blur:bg-gray-50/80 supports-backdrop-blur:dark:bg-gray-900/80 flex flex-col px-8 justify-between">
            <nav className="flex justify-between w-full relative max-w-2xl mx-auto pt-5 pb-2 sm:pb-6">
            <a href="#skip" className="skip-nav">
              Skip to content
            </a>
            {open ? (
              <>
              
              <button
              onClick={() => {
                setOpen(false)
                playMenuon()
              }}
              className="absolute h-5 w-5 sm:hidden">
                <svg
                  className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
              </>
            ) : (
          <>
          <button className='absolute h-5 w-5 sm:hidden'
          onClick={() =>
              {
                setOpen(true)
                playMenuon()
                }}>
          <svg
            className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M2.5 7.5H17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 12.5H17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          </button>
          </>
            )}
            
            <div className="ml-[-0.60rem]">
              <NavItem href="/" text="Home" description="HomePage." />
              <NavItem href="/guestbook" text="Guestbook" description="Let others know you were here!" />
              <NavItem href="/dashboard" text="Dashboard" description="Stats at one place." />
              <NavItem href="/blog" text="Blog" description="Read my blog articles." />
              <NavItem href="/snippets" text="Snippets" description="Code snippets worth sharing." />
            </div> 
            <div role="group" className='inline-flex gap-3'>
            <button
              aria-label='Toggle Command Pallete'
              type='button'
              className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300'
              onClick={
                query.toggle
              }>
                <Command width={20} height={20} />
              </button>
              <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300"
              onClick={() => {
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                playMenuon()
              }
              }
            >

              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-800 dark:text-gray-200"
                >
                  {resolvedTheme === 'dark' ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
            </div>
          </nav>
        </div>
        <main
          id="skip"
          className="flex mt-8 flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
        >
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
