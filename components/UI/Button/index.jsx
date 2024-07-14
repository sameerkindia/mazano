import Link from "next/link";

function Button({ children, href, className }) {
  return (
    <Link
      href={href}
      className={`${className} bg-secondary-color inline-block text-white py-[1vw] px-[3vw] text-[1.4vw] `}
    >
      {children}
    </Link>
  );
}

export default Button;
