import Link from 'next/link';
import useSWR from 'swr';
import { parseISO, format } from 'date-fns';
import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import type { Blog } from 'contentlayer/generated';
import Gradient from 'components/Gradient';
export default function BlogPost({
  title,
  publishedAt,
  summary,
  slug
}: Pick<Blog, 'title' | 'summary' | 'publishedAt' | 'slug'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full max-w-2x1 group relative transition-all duration-100 hover:scale-[1.025]">
        <div className="w-full mb-8  transform transition-all">
        <div className={
                    `absolute inset-0 rounded-lg bg-gradient-to-r blur-sm transition duration-1000`
                    +
                    Gradient[Math.floor(Math.random() * (25))]}
                ></div>
          <div className='relative p-4 rounded-lg bg-gray-100 text-gray-900 dark:bg-dark dark:text-gray-100'>
          <div className="flex flex-col h-full rounded-lg justify-between md:flex-row ">
            <h3 className="w-full mb-2 text-lg font-medium  md:text-xl  group-hover:text-primary-500 group-hover:dark:text-primary-500 ">
              {title}
            </h3>
            <p className="mb-4 min-w-fit max-w-full text-left text-gray-900 dark:text-[#c2c2c2] group-hover:text-primary-500 group-hover:dark:text-primary-500">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`} |{' '}
              {format(parseISO(publishedAt), 'LLL dd, yyyy')}
            </p>
          </div>
          <p className="dark:bg-dark text-gray-600 dark:text-gray-400">{summary}</p>
          <hr />
        </div>
        </div>
      </a>
    </Link>
  );
}
