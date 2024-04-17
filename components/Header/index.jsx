import DesktopHeader from "./DesktopHeader";

function Header() {
  return (
    <header className="min-h-[6rem] bg-white fixed w-full flex items-center z-10 shadow-md">
      <DesktopHeader />
    </header>
  );
}

export default Header;
