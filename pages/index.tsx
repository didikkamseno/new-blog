import { Suspense } from 'react';
import Image from 'next/image';
import Container from '../components/Container';
import BlogPostCard from '../components/cards/BlogPostCard';
import TypedBios from 'components/TypedBios';
import { motion } from 'framer-motion';

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
                <span className="font-semibold">Gujarat University</span>
              </h2>
              <svg
                aria-hidden='true'
                width='80'
                height='16'
                viewBox='0 0 432 38'
                fill='#666666'
                className='mb-8'
                >
                <path
                  d='M402.74 37.5899C390.193 37.5899 374.767 21.3129 374.111 20.6249C367.068 12.4335 359.943 5.14795 349.463 5.14795C337.975 5.14795 324.479 20.406 324.338 20.558L323.17 21.8313C315.729 29.9329 308.701 37.5893 296.186 37.5893C283.639 37.5893 268.213 21.3123 267.557 20.6243C260.514 12.4329 253.389 5.14734 242.909 5.14734C231.421 5.14734 217.925 20.4053 217.784 20.5573L216.683 21.7175C208.186 30.5847 201.48 37.5885 189.636 37.5885C177.085 37.5885 161.656 21.3115 161.007 20.6235C153.96 12.4321 146.831 5.14655 136.359 5.14655C124.871 5.14655 111.375 20.4045 111.234 20.5565L110.054 21.8417C102.62 29.9394 95.5889 37.5837 83.0769 37.5837C70.5259 37.5837 55.0969 21.3067 54.4479 20.6187C47.401 12.4273 40.2719 5.14175 29.7999 5.14175C19.3699 5.14175 9.86587 10.8722 4.98787 20.0987C4.3824 21.2549 2.94488 21.6964 1.78478 21.087C0.628579 20.4698 0.187069 19.0401 0.800389 17.8839C6.50349 7.10691 17.6124 0.403931 29.7964 0.403931C42.2694 0.403931 50.5504 8.82583 57.9644 17.4469C61.941 21.6774 74.3554 32.8419 83.0734 32.8419C93.5074 32.8419 99.2644 26.5724 106.557 18.6349L107.702 17.3888C108.268 16.7404 122.733 0.404816 136.35 0.404816C148.823 0.404816 157.104 8.82671 164.518 17.4478C168.494 21.6783 180.909 32.8428 189.627 32.8428C199.447 32.8428 204.943 27.1123 213.256 18.4368L214.295 17.3509C214.83 16.7337 229.295 0.401917 242.908 0.401917C255.388 0.401917 263.67 8.82382 271.076 17.4449C275.053 21.6676 287.467 32.8359 296.185 32.8359C306.623 32.8359 312.388 26.5625 319.685 18.6129L320.822 17.3785C321.388 16.7301 335.853 0.394531 349.463 0.394531C361.943 0.394531 370.225 8.81643 377.631 17.4375C381.607 21.6602 394.022 32.8285 402.74 32.8285C412.744 32.8285 422.06 27.4379 427.064 18.7625C427.716 17.6258 429.161 17.2313 430.302 17.8914C431.435 18.5438 431.822 19.993 431.173 21.1258C425.321 31.2898 414.427 37.5908 402.739 37.5908L402.74 37.5899Z'
                />
              </svg>
              <h2 className="mb-4  text-gray-700 dark:text-gray-200">
                Currently working as junior research fellow in fractional-order mathematical modelling at {' '}
                <span className="font-semibold text-slate-700 dark:text-slate-300">CSIR, India.</span>
              </h2>
              <div className="mb-8 text-gray-700 dark:text-gray-200 hidden sm:flex">
               <TypedBios />
              </div>
              <div className="mb-16 text-slate-600 dark:text-slate-400 hidden sm:block">
                <span className="text-base">Tip: Press</span>{' '}
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
                <span className="text-base">to quickly navigate.</span>
              </div>
            </div>
            <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
            <div className="absolute sm:-right-[130px] sm:top-[80px] rounded-[50%] blur-[32px] [transform:translate(-50%,-50%)]  bg-gradient-to-tr from-cyan-600 via-sky-500 to-blue-500 dark:bg-gradient-to-tr dark:from-purple-500 dark:to-pink-500 md:h-52 md:w-52 md:blur-[56px]"></div>
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
                title="Building a command bar for my website"
                slug="building-command-bar-kbar"
               /> 
              <BlogPostCard
                title="CSIR NEWFMS Portal Guide"
                slug="csir-newfms-guide-1"
               />
              <BlogPostCard
                title="Practice Questions"
                slug="practice-questions-matrix-algebra-mat411pr"
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




