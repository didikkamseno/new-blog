import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Container';
// import avatar from 'public/avatar.jpg';
// import avatarBW from 'public/avatar-bw.jpg';


export default function About() {
  return (
    <Container title="About – Kapil Chaudhary">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/kapiljch">@kapiljch</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/heykapil">@heykapil</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://heykapil.in">
                <a>https://heykapil.in</a>
              </Link>
            </li>
            {/* <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/leeerob/">
                https://www.linkedin.com/in/leeerob
              </a>
            </li> */}
          </ul>
          <h2>Bio</h2>
          <h3>Current Position</h3>
          <p>Kapil Chaudhary, Ph.D. student at Gujarat University.</p>
          {/* <h3>Long, 3rd Person</h3>
          <p>
            Lee Robinson is the VP of Developer Experience at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web and leads the Next.js community. He leads the
            community for the React framework Next.js and is an open-source
            contributor. An educator, writer, and speaker, Lee has created
            courses on React, Next.js, and web development.
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web. I'm a Next.js contributor and help
            lead our open-source communities. I've passionate about frontend
            development and have created courses on React, Next.js, and web
            development. I'm an advisor and investor in early stage startups.
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Lee Robinson is the VP of Developer Experience at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web.
          </p> */}
          <h3>Education</h3>
          <p>
            Kapil Chaudhary graduated from University of Delhi with Honors in Mathematics.
          </p>
          <h2>Headshots</h2>
          {/* <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Lee Robinson headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Lee Robinson headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div> */}
        </div>
      </div>
    </Container>
  );
}