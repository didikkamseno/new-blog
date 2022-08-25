import 'styles/global.css';
import 'katex/dist/katex.min.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from "@nextui-org/react";
import { CommandBar } from 'components/CommandBar';

export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <CommandBar>
      <ThemeProvider
      attribute="class"
      >
         <NextUIProvider>
          <Component {...pageProps} />
          </NextUIProvider>
      </ThemeProvider>
      </CommandBar>
    </SessionProvider>
    </>
  );
}
