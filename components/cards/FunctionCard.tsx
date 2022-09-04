import Link from 'next/link';
import Image from 'next/image';
import Gradient from '../Gradient'

export default function FunctionCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) 
{
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className=" group relative text-gray-900 dark:text-gray-100  rounded-lg p-4 w-full  transform hover:scale-[1.025] transition-all"
        {...rest}
      >
        <div className={
                    `absolute inset-4 rounded-lg bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-[0.5] group-hover:blur-md group-hover:duration-500`
                    +
                    Gradient[Math.floor(Math.random() * (25))]}
                ></div>
        <div className='relative h-full block rounded-lg p-6 bg-gray-100 dark:bg-dark'>
        <Image
          alt={title}
          height={32}
          width={32}
          src={`/logos/${logo}`}
          className="rounded-full"
        />
        <h3 className="text-lg font-bold text-left mt-2">
          {title}
        </h3>
        <p className="mt-1 text-gray-500">{description}</p>
        </div>
      </a>
    </Link>
  );
}
