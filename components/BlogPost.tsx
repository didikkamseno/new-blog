import Link from 'next/link';
import useSWR from 'swr';
import { parseISO, format } from 'date-fns';
import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import type { Blog } from 'contentlayer/generated';

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
      <a className="w-full group transition-all duration-100 hover:scale-[1.025]">
        <div className="w-full mb-8 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 group-hover:rounded-xl group-hover:px-4 group-hover:py-2 transform transition-all">
          <div className="flex flex-col justify-between md:flex-row ">
            <h3 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 group-hover:text-primary-500 dark:group-hover:text-primary-500">
              {title}
            </h3>
            <p className="mb-4 min-w-fit max-w-full text-left text-gray-900 dark:text-[#c2c2c2] group-hover:text-primary-500  md:mb-0 md:text-right">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`} |{' '}
              {format(parseISO(publishedAt), 'LLL dd, yyyy')}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
          <hr />
        </div>
      </a>
    </Link>
  );
}
