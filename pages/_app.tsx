import 'styles/global.css';
import 'katex/dist/katex.min.css'
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { lightTheme, darkTheme } from 'themes/Shared';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { KBarProvider } from 'kbar'
import { FileText, Home, Box, User, Tool, Mail, AtSign, Twitter, GitHub, Linkedin } from 'react-feather';
import KBarMenu from 'components/KBarMenu';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const initialActions = [
    {
      id: 'homeAction',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'back',
      icon: <Home width={16} height={16} />,
      perform: () => router.push('/'),
      section: 'Navigation',
    },
    {
      id: 'blogAction',
      name: 'Blog',
      shortcut: ['b'],
      icon: <FileText width={16} height={16} />,
      perform: () => router.push('/blog/'),
      section: 'Navigation',
    },
    {
      id: 'guestbookAction',
      name: 'Guestbook',
      shortcut: ['g', 'b'],
      icon: <FileText width={16} height={16} />,
      perform: () => router.push('/guestbook/'),
      section: 'Navigation',
    },
    {
      id: 'aboutAction',
      name: 'About me',
      shortcut: ['a'],
      icon: <User width={16} height={16} />,
      perform: () => router.push('/sobre-mi/'),
      section: 'Navigation',
    },
    {
      id: 'usesAction',
      name: 'uses',
      shortcut: ['u'],
      icon: <Tool width={16} height={16} />,
      perform: () => router.push('/uses'),
      section: 'Navigation',
    },
    {
      id: 'email',
      name: 'Email',
      shortcut: ['s', 'e'],
      keywords: 'send-email',
      section: 'Social Links',
      perform: () => (window.open('mailto:contact@heykapil.in', '_blank')),
      icon: <Mail width={16} height={16} />,
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['s', 'g'],
      keywords: 'go-github',
      section: 'Social Links',
      perform: () => (window.open('https://github.com/heykapil', '_blank')),
      icon: <GitHub width={16} height={16} />,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['s', 't'],
      keywords: 'go-twitter',
      section: 'Social Links',
      perform: () => (window.open('https://twitter.com/kapiljch', '_blank')),
      icon: <Twitter width={16} height={16} />,
    },
  ]
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <KBarProvider actions={initialActions}>
      <KBarMenu />
      <NextThemesProvider
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}>
         <NextUIProvider>
          <Component {...pageProps} />
          </NextUIProvider>
      </NextThemesProvider>
      </KBarProvider>
    </SessionProvider>
    </>
  );
}
