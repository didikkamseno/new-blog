import NavItems from "components/menu/NavItems";
import { Dispatch, SetStateAction } from "react";

function Nav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${
        open ? "sm:hidden" : "sm:hidden -translate-x-full"
      } nav sm:hidden justify-between overflow-x-hidden space-x-0 shadow-2xl z-10 fixed bottom-0 top-0 flex flex-col pt-20 sm:pt-10 px-5 dark:bg-neutral-900 dark:border-r-[1px] dark:border-neutral-800 bg-white bg-opacity-60 sm:bg-opacity-20 dark:bg-opacity-100 drop-shadow-lg backdrop-blur w-56 h-full supports-backdrop-blur:bg-gray-50/80 supports-backdrop-blur:dark:bg-gray-900/80 overflow-scroll`}
    >
    
      <div
        onClick={() => setOpen(false)}
        className="sm:hidden transition-none space-x-0 flex flex-col text-sm text-gray-700 dark:text-neutral-200 antialiased"
      >
        <NavItems />
      </div>

      <div className="flex sm:hidden my-10">
      </div>
    </div>
  );
}

export default Nav;