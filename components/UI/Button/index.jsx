import Link from "next/link";

function Button({ children, href, className }) {
  return (
    <Link
      href={href}
      className={`${className} bg-secondary-color inline-block text-white py-[1.5vw] md:py-[1vw] px-[4vw] md:px-[3vw] text-[2vw] md:text-[1.4vw] `}
    >
      {children}
    </Link>
  );
}

export default Button;
