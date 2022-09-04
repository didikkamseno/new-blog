import NavLink from "components/menu/NavLink";
import {
  ChatAltIcon,
  ChipIcon,
  CodeIcon,
  HomeIcon,
  InformationCircleIcon,
  PencilAltIcon,
  PhotographIcon,
  SparklesIcon,
  DocumentTextIcon,
  ChartBarIcon
} from "@heroicons/react/outline";
import useSound from "use-sound";
import { Twitter, BarChart2 } from 'react-feather';


export default function NavItems() {
  const [playpageSwitch] = useSound("/media/page-switch.mp3");
  return (
    <div className="block space-y-2">
      <NavLink href="/" name="Home">
        <HomeIcon />
      </NavLink>
      <NavLink href="/research" name="Research">
        <DocumentTextIcon />
      </NavLink>
      <NavLink href="/blog" name="Posts">
        <PencilAltIcon />
      </NavLink>
      <NavLink href="/snippets" name="Snippets">
        <CodeIcon />
      </NavLink>
      {/* <NavLink href="/design" name="Design Inspiration">
        <SparklesIcon /> 
      </NavLink>*/}
      <NavLink href="/gallery" name="Gallery">
        <PhotographIcon />
      </NavLink>
      <NavLink href='/guestbook' name="Guestbook">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </NavLink>
      <NavLink href="/dashboard" name="Dashboard">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
      </NavLink>
      {/* <NavLink href="/contact" name="Contact">
        <ChatAltIcon />
      </NavLink>
      <NavLink href="/now" name="Now">
        <InformationCircleIcon />
      </NavLink> */}
      <NavLink href="/tweets" name="Tweets">
      <Twitter width={16} height={16} />
      </NavLink>
      {/* <NavLink href="/uses" name="Uses">
        <ChipIcon />
      </NavLink> */}
      <h3 className="font-bold text-gray-700 text-base px-2 !my-5 block">
        On the Web
      </h3>
    </div>
  );
}