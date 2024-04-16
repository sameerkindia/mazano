import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

function DesktopHeader() {
  return (
    <div className="container flex items-center justify-between ">
      <h1 className="text-[2.6rem] font-semibold">Mazano.</h1>

      <nav className="text-lg uppercase flex gap-2 basis-2/6 justify-between ">
        <Link href="#home" className="navigation-link">
          Home
        </Link>
        <Link href="#freshfood" className="navigation-link">
          Fresh Food
        </Link>
        <Link href="#shop" className="navigation-link">
          Shop
        </Link>
        <Link href="#about" className="navigation-link">
          About
        </Link>
        <Link href="#blog" className="navigation-link">
          Blog
        </Link>
      </nav>

      <div>
        <Link className="navigation-link" href="/">
          <IoCartOutline className="h-10 w-10" />
        </Link>
      </div>
    </div>
  );
}

export default DesktopHeader;
