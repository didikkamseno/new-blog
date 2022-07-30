import Link from "next/link";
import { useRouter } from "next/router";
import useSound from "use-sound";
export default function NavLink({ children, href, name }) {
  const router = useRouter();
  const [playpageChange] = useSound("/media/page-change.mp3");
  const isActive = router.pathname.split('/')[1] === href.split('/')[1];
  return (
    <Link passHref href={href}>
      <div
        className={`${
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-800 bg-gradient-to-br from-header-active-from via-header-active-via to-header-active-to'
            : "font-semibold text-gray-800 dark:text-gray-400"
        } navLink flex items-center space-x-4 cursor-pointer text-gray-800 dark:text-gray-200 hover:dark:text-gray-700 hover:bg-gradient-to-tr hover:from-header-hover-from hover:via-header-hover-via hover:to-header-hover-to rounded-lg p-2 transition-transform transform ease-in-out duration-300`}
        onClick={() => {
          playpageChange()
        }}
      >
        {children}
        <p className="block">{name}</p>
      </div>
    </Link>
  );
}