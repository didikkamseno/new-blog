import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/Container';
import BlogPostCard from '../components/cards/BlogPostCard';
// import Subscribe from '../components/Subscribe';
// import VideoCard from '../components/VideoCard';
import TypedBios from 'components/TypedBios';
// import ADiv from 'components/animated/adiv';

export default function Home() {
  return (
    <>
     <Suspense fallback={null}> 
      <Container>
          <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
            <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
           
            <h1 className="mb-1 text-3xl font-bold bg-gradient-to-tr from-sky-600 via-sky-500 to-sky-500 bg-clip-text text-transparent dark:from-purple-500 dark:via-fuchsia-500 dark:to-pink-500">
              Kapil Chaudhary
            </h1>
              <h2 className="mb-4 text-gray-700 dark:text-gray-200">
                Ph.D. student at {' '}
                <span className="font-semibold">Gujarat University.</span>
              </h2>
              <h2 className="mb-4 text-gray-700 dark:text-gray-200">
                Currently working as junior research fellow in fractional-order mathematical modelling at {' '}
                <span className="font-semibold">CSIR, India.</span>
              </h2>
              <div className="mb-16 text-gray-600 dark:text-gray-300 hidden sm:flex">
               <TypedBios />
              </div>
            </div>
            <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
            <div className="absolute sm:-right-[130px] sm:top-[80px] rounded-[50%] blur-[32px] [transform:translate(-50%,-50%)]  bg-gradient-to-tr from-cyan-600 via-sky-500 to-blue-500 from-sdark:bg-gradient-to-tr dark:from-purple-500 dark:to-pink-500 md:h-52 md:w-52 md:blur-[56px]"></div>
              <Image
                alt="Kapil Chaudhary"
                height={500}
                width={500}
                src="/avatar.jpg"
                placeholder="blur"
                blurDataURL="/static/images/SVG-placeholder.png"
                sizes="30vw"
                priority
                className="rounded-full"
              />
            </div>
            </div>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
              Featured Posts
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
              <BlogPostCard
                title="CSIR NEWFMS Portal Guide"
                slug="csir-newfms-guide-1"
                gradient="from-[#D8B4FE] to-[#818CF8]"
              />
              {/* <BlogPostCard
                title="Rust Is The Future of JavaScript Infrastructure"
                slug=""
                gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              /> */}
              <BlogPostCard
                title="Practice Questions"
                slug="practice-questions-matrix-algebra-mat411pr"
                gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              /> 
            </div>
            {/* <Link href="/blog">
              <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                Read all posts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  />
                </svg>
              </a>
            </Link>

            {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
              Learn React & Next.js
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Build and deploy a modern SaaS application using the most popular
              open-source software. This course is 12 hours long and is completely
              live streamed.
            </p>
            <VideoCard
              index="01"
              href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
              length="1:02:45"
              title="Introduction to React 2025"
            />
            <VideoCard
              index="02"
              href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
              length="54:22"
              title="Firestore, Chakra UI, Absolute Imports"
            />
            <VideoCard
              index="03"
              href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
              length="1:08:30"
              title="Designing & Building the Dashboard"
            />
            <VideoCard
              index="04"
              href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
              length="1:13:45"
              title="Firebase Admin with Next.js + SWR"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
              className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
            >
              Watch all videos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a> 
            <span className="h-16" />
             <Subscribe /> */}
          </div>
        </Container>
        </Suspense>
      </>
  );
}






