import 'styles/global.css';
import 'katex/dist/katex.min.css'
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { lightTheme, darkTheme } from 'themes/Shared';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from "@nextui-org/react";
import { CommandBar } from 'components/CommandBar';

export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <CommandBar>
      <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}>
         <NextUIProvider>
          <Component {...pageProps} />
          </NextUIProvider>
      </NextThemesProvider>
      </CommandBar>
    </SessionProvider>
    </>
  );
}
