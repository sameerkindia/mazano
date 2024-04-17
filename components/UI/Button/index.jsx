import Link from "next/link";

function Button({ children, href, className }) {
  return (
    <Link
      href={href}
      className={`${className} bg-secondary-color inline-block text-white py-[1rem] px-[3rem] text-[1.3rem] `}
    >
      {children}
    </Link>
  );
}

export default Button;
