import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import Gradient from './../Gradient';
export default function BlogPostCard({ title, slug }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`} className='group relative'>
      <a
        className={cn(
          'transform hover:scale-[1.01] transition-all',
          'rounded-lg w-full md:w-1/3 bg-gradient-to-r',
        )}
      >
        <div className={
        `absolute inset-0 rounded-lg bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-[0.5] group-hover:blur-md group-hover:duration-500`
        +
        Gradient[Math.floor(Math.random() * (25))]}
    > </div>
    <div className="relative flex h-full flex-col justify-between  rounded-xl bg-gray-50 p-6 dark:bg-dark">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>
          </div>
          <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="ml-2 align-baseline capsize">
              {views ? new Number(views).toLocaleString() : '–––'}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}
