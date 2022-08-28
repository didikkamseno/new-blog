import Link from 'next/link';
import { motion } from 'framer-motion';
import NowPlaying from 'components/NowPlaying';
import { FadeContainer , popUp } from 'lib/anims';

const ExternalLink = ({ href, children }) => (
  <motion.a variants={popUp}
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </motion.a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4 sm:mb-8" />
      <NowPlaying />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
         className="w-full max-w-2xl grid grid-cols-2 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <motion.a variants={popUp} className="text-gray-500 hover:text-gray-600 transition">Home</motion.a>
          </Link>
          <Link href="/about">
            <motion.a variants={popUp} className="text-gray-500 hover:text-gray-600 transition">
              About
            </motion.a>
          </Link>
          <Link href="/research">
            <motion.a variants={popUp} className="text-gray-500 hover:text-gray-600 transition">
              Research
            </motion.a>
          </Link>
        </div>
        <div className="hidden sm:flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/kapiljch">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/heykapil">GitHub</ExternalLink>
           <ExternalLink href="https://www.instagram.com/kapiljch">
            Instagram
          </ExternalLink> 
        </div>
        <div className="flex flex-col space-y-4">
          {/* <Link href="/uses">
             <motion.a variants={popUp} className="text-gray-500 hover:text-gray-600 transition">Uses</motion.a> 
          </Link> */}
          <Link href="/guestbook">
            <motion.a variants={popUp} className="text-gray-500 hover:text-gray-600 transition">
              Guestbook
            </motion.a>
          </Link>
          <Link href="/snippets">
            <motion.a variants={popUp} className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </motion.a>
          </Link>
          <Link href="/tweets" >
            <motion.a variants={popUp} className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </motion.a>
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
