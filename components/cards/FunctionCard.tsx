import Link from 'next/link';
import Image from 'next/image';

const gradients = {
  '0': ' from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
  '1': ' from-[#D8B4FE] to-[#818CF8]',
  '2': ' to-[#6EE7B7] from-[#6EE7F9]',
}
export default function FunctionCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) 
{
  return (
    <Link href={`/snippets/${slug}`} className="group relative w-full transform transition-all hover:scale-[1.05] md:w-1/3">
      <a
        className="  text-gray-900 dark:text-gray-100  rounded-lg p-4 w-full  transform hover:scale-[1.025] transition-all"
        {...rest}
      >
        <div className={
                    `absolute inset-4 rounded-lg bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-[0.5] group-hover:blur-md group-hover:duration-500`
                    +
                    gradients[Math.floor(Math.random() * (3))]}
                ></div>
        <div className='relative h-full block rounded-lg p-6 bg-gray-50 dark:bg-dark'>
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
