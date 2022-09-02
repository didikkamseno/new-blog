import Image from 'next/image'
import { useState } from 'react'

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function Track(track) {
  const [isLoading, setLoading] = useState(true)
  return (
    <div className="group mt-8 flex w-full max-w-3xl transform flex-row items-baseline border-b border-gray-200 transition-all hover:scale-[1.03] dark:border-gray-800">
      <p className="text-sm font-bold text-gray-400 dark:text-gray-600">{track.ranking}</p>
      <div className="flex justify-self-auto">
      <div className="flex flex-col pl-3">
      <Image src={track.imageUrl} width={48} height={48} alt="" className={cn(
              'rounded-lg duration-700 ease-in-out group-hover:opacity-75',
              isLoading
                ? 'rounded-lg scale-110 blur-2xl grayscale'
                : 'rounded-lg scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)} />
      </div>
      <div className="flex flex-col pl-3">
        <a
          className="w-60 truncate font-medium text-gray-900 group-hover:text-[#1bd760] dark:text-gray-100 group-hover:dark:text-[#1bd760] sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p className="mb-4 w-60 truncate text-gray-500 sm:w-96 md:w-full " color="gray.500">
          {track.artist}
        </p>
      </div>
      </div>
    </div>
  )
}