import Link from "next/link";

function Button({ children, className, href }) {
  return (
    <Link
      href={href}
      className="className bg-secondary-color inline-block px-12 py-4 text-[1.5rem] text-white "
    >
      {children}
    </Link>
  );
}

export default Button;
