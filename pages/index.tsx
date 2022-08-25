import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/Container';
import BlogPostCard from '../components/cards/BlogPostCard';
// import Subscribe from '../components/Subscribe';
// import VideoCard from '../components/VideoCard';
import TypedBios from 'components/TypedBios';
// import avatar from '.../public/avatar.jpg';

export default function Home() {
  return (
    <>
     <Suspense fallback={null}> 
      <Container>
      <div className="flex flex-col items-center max-w-2xl mx-auto border-gray-200 dark:border-gray-700 pb-44 pt-6 md:flex-row-reverse md:gap-6">
      <div className="relative mx-auto h-52 w-52 md:h-64 md:w-64 md:flex-[1]">
        <div className="absolute left-1/2 top-1/2 h-40 w-40 rounded-[50%] blur-[32px] [transform:translate(-50%,-50%)]  bg-gradient-to-tr from-cyan-600 via-sky-500 to-blue-500 from-sdark:bg-gradient-to-tr dark:from-purple-500 dark:to-pink-500 md:h-52 md:w-52 md:blur-[56px]" />
        <Image
          priority
          src="/avatar.jpg"
          alt="KC"
          width={150}
          height={150}
          className="invisible sm:visible absolute left-1/2 top-1/2 h-40 w-40 rounded-full"
        />
      </div>

      <div className="flex flex-[2] flex-col items-left gap-3">
        <h1 className="bg-gradient-to-tr from-sky-600 via-sky-500 to-sky-500 bg-clip-text text-4xl font-extrabold text-transparent dark:from-purple-500 dark:via-fuchsia-500 dark:to-pink-500 md:text-4xl text-left">
          Kapil Chaudhary
        </h1>
        <p className="text-zinc-700 dark:text-zinc-400 text-left">Ph.D. student at Gujarat University</p>
        <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-400">
          I&#39;m <b>Kapil</b>, a junior research fellow funded by <b>CSIR</b> working on <b>Fractional-order dynamical system</b> who loves <b>Front end development</b> and <b>NextJS</b>.
        </p>
        <div className="text-sm text-zinc-700 dark:text-zinc-400 flex">
               <TypedBios />
        </div>
        <div className="mt-8 text-slate-600 dark:text-slate-400 hidden sm:block">
                <span className="text-sm">Press</span>{' '}
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  ⌘
                </span>{' '}
                <span className="text-sm">/ </span>
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  ctrl
                </span>{' '}
                <span className="text-sm">+ </span>
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  K
                </span>{' '}
                <span className="text-sm">to easily navigate.</span>
        </div>
        </div>
        </div>
        </Container>
        </Suspense>
      </>
  );
}